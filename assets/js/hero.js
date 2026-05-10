/* hero.js — Three.js dodecahedron with gravity-bounce intro
   Falls from above on load, bounces with restitution 0.58, settles after
   ~6 bounces, then slowly rotates. Falls back to 2D SVG if WebGL fails.
*/
(function(){
  function init(){
    const stage = document.querySelector('[data-hero-stage]');
    if (!stage) return;

    const W = stage.clientWidth || 540;
    const H = stage.clientHeight || 540;

    if (!window.THREE) { renderFallback(stage); return; }

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
    } catch(e) { renderFallback(stage); return; }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
    renderer.setSize(W, H, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(35, W/H, 0.1, 100);
    cam.position.set(0, 0.4, 6.4); cam.lookAt(0,0,0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const key = new THREE.DirectionalLight(0xE879F9, 1.0); key.position.set(3,4,5); scene.add(key);
    const fill = new THREE.DirectionalLight(0x818CF8, 0.7); fill.position.set(-3,1,4); scene.add(fill);
    const rim = new THREE.DirectionalLight(0x7C3AED, 0.6); rim.position.set(0,-3,-2); scene.add(rim);

    let geom = new THREE.DodecahedronGeometry(1.15, 0);
    geom = geom.toNonIndexed ? geom.toNonIndexed() : geom;

    const palette = [
      new THREE.Color('#4A0072'), new THREE.Color('#5B21B6'),
      new THREE.Color('#6D28D9'), new THREE.Color('#7C3AED'),
      new THREE.Color('#8B5CF6'), new THREE.Color('#A78BFA'),
      new THREE.Color('#818CF8'), new THREE.Color('#E879F9'),
      new THREE.Color('#C084FC'), new THREE.Color('#9333EA')
    ];
    const posAttr = geom.attributes.position;
    const triCount = posAttr.count / 3;
    const groups = new Map();
    const tA = new THREE.Vector3(), tB = new THREE.Vector3(), tC = new THREE.Vector3();
    const e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), n = new THREE.Vector3();
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
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

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

    // physics
    const groundY = -0.5; const radius = 1.15;
    const restY = groundY + radius * 0.55;
    const pos = new THREE.Vector3(0, 2.4, 0);
    const vel = new THREE.Vector3(0, 0, 0);
    const g = -14, restitution = 0.58;
    const omega = new THREE.Vector3(
      (Math.random()*2-1)*2.0,
      (Math.random()*2-1)*2.0,
      (Math.random()*2-1)*2.0
    );
    let bounces = 0; const maxBounces = 6;
    let last = performance.now();
    let raf = 0; let alive = true;
    let idleSpin = 0;

    function tick(now){
      if (!alive) return;
      const dt = Math.min(0.033, (now-last)/1000); last = now;
      if (bounces < maxBounces){
        vel.y += g * dt;
        pos.addScaledVector(vel, dt);
        if (pos.y < restY){
          pos.y = restY;
          if (Math.abs(vel.y) < 1.0){ vel.y = 0; bounces = maxBounces; }
          else { vel.y = -vel.y * restitution; bounces++; omega.multiplyScalar(0.85); }
        }
      } else {
        idleSpin += dt;
      }
      mesh.position.copy(pos);
      const len = omega.length();
      if (bounces < maxBounces && len > 0.001){
        const dq = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(omega.x, omega.y, omega.z).normalize(),
          len * dt
        );
        mesh.quaternion.premultiply(dq);
      } else {
        // gentle idle rotation
        const dq = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0.2, 1, 0.05).normalize(), 0.18 * dt
        );
        mesh.quaternion.premultiply(dq);
      }
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

    document.addEventListener('visibilitychange', ()=>{
      if (document.hidden) { alive = false; cancelAnimationFrame(raf); }
      else if (!alive) { alive = true; last = performance.now(); raf = requestAnimationFrame(tick); }
    });
  }

  function renderFallback(stage){
    const D = window.Dodec; if (!D) return;
    const size = stage.clientWidth || 540;
    const data = D.project({ rx:-0.3, ry:0.5, scale:size*0.32, cx:size/2, cy:size/2 });
    const visible = data.faces.filter(f=>f.n[2] > 0.001).sort((a,b)=>a.z-b.z);
    const palette = ['#4A0072','#5B21B6','#6D28D9','#7C3AED','#8B5CF6','#A78BFA','#818CF8','#E879F9','#C084FC','#9333EA'];
    function pick(f){
      const t = (f.n[0]*0.3 + f.n[1]*0.5 + f.n[2]*0.4 + 1)/2;
      return palette[Math.max(0, Math.min(palette.length-1, Math.floor(t*(palette.length-1))))];
    }
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
    svg.setAttribute('width', size); svg.setAttribute('height', size);
    visible.forEach(f=>{
      const p = document.createElementNS(svgNS, 'path');
      p.setAttribute('d', f.d); p.setAttribute('fill', pick(f));
      p.setAttribute('stroke', 'rgba(255,255,255,0.22)'); p.setAttribute('stroke-width', '0.7');
      svg.appendChild(p);
    });
    stage.appendChild(svg);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
