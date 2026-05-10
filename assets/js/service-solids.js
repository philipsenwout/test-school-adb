/* service-solids.js — renders a small Three.js platonic solid in every
   element with [data-solid="<name>"]. Names: tetra, cube, octa, dodeca, icosa.
   Each solid spins gently. Falls back to a static SVG if WebGL fails.
*/
(function(){
  const PALETTE_HEX = ['#4A0072','#5B21B6','#6D28D9','#7C3AED','#8B5CF6','#A78BFA','#818CF8','#E879F9','#C084FC','#9333EA'];

  function makeGeom(name){
    if (!window.THREE) return null;
    const T = window.THREE;
    switch(name){
      case 'tetra':  return new T.TetrahedronGeometry(1.25, 0);
      case 'cube':   return new T.BoxGeometry(1.7, 1.7, 1.7);
      case 'octa':   return new T.OctahedronGeometry(1.35, 0);
      case 'dodeca': return new T.DodecahedronGeometry(1.15, 0);
      case 'icosa':  return new T.IcosahedronGeometry(1.25, 0);
      default:       return new T.DodecahedronGeometry(1.15, 0);
    }
  }

  function paintFaces(geom){
    const T = window.THREE;
    const g = (geom.toNonIndexed ? geom.toNonIndexed() : geom);
    const posAttr = g.attributes.position;
    const triCount = posAttr.count / 3;
    const groups = new Map();
    const tA = new T.Vector3(), tB = new T.Vector3(), tC = new T.Vector3();
    const e1 = new T.Vector3(), e2 = new T.Vector3(), n = new T.Vector3();
    for (let t=0; t<triCount; t++){
      tA.fromBufferAttribute(posAttr, t*3+0);
      tB.fromBufferAttribute(posAttr, t*3+1);
      tC.fromBufferAttribute(posAttr, t*3+2);
      e1.subVectors(tB, tA); e2.subVectors(tC, tA);
      n.crossVectors(e1, e2).normalize();
      const k = `${n.x.toFixed(3)}|${n.y.toFixed(3)}|${n.z.toFixed(3)}`;
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(t);
    }
    const palette = PALETTE_HEX.map(h => new T.Color(h));
    const colorOf = new Array(triCount);
    [...groups.keys()].sort().forEach(k=>{
      const [nx,ny,nz] = k.split('|').map(parseFloat);
      const t = (nx*0.3 + ny*0.5 + nz*0.4 + 1)/2;
      const idx = Math.max(0, Math.min(palette.length-1, Math.floor(t*(palette.length-1))));
      groups.get(k).forEach(ti => colorOf[ti] = palette[idx]);
    });
    const colors = new Float32Array(triCount * 9);
    for (let t=0; t<triCount; t++){
      const c = colorOf[t] || palette[3];
      for (let v=0; v<3; v++){
        const o = (t*3+v)*3;
        colors[o]=c.r; colors[o+1]=c.g; colors[o+2]=c.b;
      }
    }
    g.setAttribute('color', new T.BufferAttribute(colors, 3));
    return g;
  }

  function fallback(stage, name){
    // Minimal static placeholder — tinted square with letter — rare path.
    const c = document.createElement('div');
    c.style.cssText = 'width:100%;height:100%;display:grid;place-items:center;background:linear-gradient(140deg,#2D1557,#7C3AED);color:#fff;font-family:monospace;letter-spacing:.2em;font-size:11px;border-radius:14px;';
    c.textContent = name.toUpperCase();
    stage.appendChild(c);
  }

  function initOne(stage){
    const name = stage.getAttribute('data-solid') || 'dodeca';
    if (!window.THREE) { fallback(stage, name); return; }

    const W = stage.clientWidth || 200;
    const H = stage.clientHeight || 200;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
    } catch(e) { fallback(stage, name); return; }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
    renderer.setSize(W, H, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(34, W/H, 0.1, 100);
    cam.position.set(0, 0.1, 5.0); cam.lookAt(0,0,0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const key = new THREE.DirectionalLight(0xE879F9, 0.95); key.position.set(3,4,5); scene.add(key);
    const fill = new THREE.DirectionalLight(0x818CF8, 0.6); fill.position.set(-3,1,4); scene.add(fill);
    const rim = new THREE.DirectionalLight(0x7C3AED, 0.5); rim.position.set(0,-3,-2); scene.add(rim);

    const geom = paintFaces(makeGeom(name));
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true, metalness: 0.45, roughness: 0.32,
      emissive: 0x2D1557, emissiveIntensity: 0.2, flatShading: true
    });
    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geom),
      new THREE.LineBasicMaterial({ color: 0xFFFFFF, transparent:true, opacity:0.22 })
    );
    mesh.add(edges);

    // Per-solid spin axis & speed for visual variety
    const axes = {
      tetra:  { v:[0.3, 1.0, 0.1],  s:0.30 },
      cube:   { v:[1.0, 0.7, 0.0],  s:0.18 },
      octa:   { v:[0.0, 1.0, 0.4],  s:0.26 },
      dodeca: { v:[0.2, 1.0, 0.05], s:0.22 },
      icosa:  { v:[0.4, 0.8, 0.2],  s:0.24 }
    };
    const cfg = axes[name] || axes.dodeca;
    const axis = new THREE.Vector3(...cfg.v).normalize();
    // Random initial orientation so each instance starts unique
    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI*0.3);

    let last = performance.now();
    let raf = 0; let alive = true;

    function tick(now){
      if (!alive) return;
      const dt = Math.min(0.033, (now-last)/1000); last = now;
      const t = now * 0.001;
      const dq = new THREE.Quaternion().setFromAxisAngle(axis, cfg.s * dt);
      mesh.quaternion.premultiply(dq);
      // tiny vertical wobble
      mesh.position.y = Math.sin(t * 1.2) * 0.06;
      renderer.render(scene, cam);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function onResize(){
      const w = stage.clientWidth, h = stage.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      cam.aspect = w/h; cam.updateProjectionMatrix();
    }
    window.addEventListener('resize', onResize);

    // Pause when off-screen for perf
    if ('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if (e.isIntersecting){
            if (!alive){ alive = true; last = performance.now(); raf = requestAnimationFrame(tick); }
          } else {
            alive = false; cancelAnimationFrame(raf);
          }
        });
      }, { threshold: 0.05 });
      io.observe(stage);
    }

    document.addEventListener('visibilitychange', ()=>{
      if (document.hidden) { alive = false; cancelAnimationFrame(raf); }
      else if (!alive) { alive = true; last = performance.now(); raf = requestAnimationFrame(tick); }
    });
  }

  function init(){
    const stages = document.querySelectorAll('[data-solid]');
    stages.forEach(initOne);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
