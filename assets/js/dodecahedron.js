// Dodecahedron geometry helper.
// Returns vertices (3D), face-vertex-indices, and a project() that yields 2D points
// after rotating around X then Y, in viewer-space (camera looking down -Z).

(function(){
  // Golden ratio
  const PHI = (1 + Math.sqrt(5)) / 2;
  const INV = 1 / PHI;

  // 20 vertices of a regular dodecahedron (circumradius sqrt(3))
  const V = [
    [ 1, 1, 1], [ 1, 1,-1], [ 1,-1, 1], [ 1,-1,-1],
    [-1, 1, 1], [-1, 1,-1], [-1,-1, 1], [-1,-1,-1],
    [0, INV, PHI], [0, INV,-PHI], [0,-INV, PHI], [0,-INV,-PHI],
    [INV, PHI, 0], [INV,-PHI, 0], [-INV, PHI, 0], [-INV,-PHI, 0],
    [PHI, 0, INV], [PHI, 0,-INV], [-PHI, 0, INV], [-PHI, 0,-INV]
  ];

  // 12 pentagonal faces (vertex indices in CCW when viewed from outside)
  const F = [
    [ 0, 8,10, 2,16],
    [ 0,16,17, 1,12],
    [12, 1, 9, 5,14],
    [ 4,14, 5,19,18],
    [ 4,18, 6,10, 8],
    [ 0,12,14, 4, 8],
    [ 2,10, 6,15,13],
    [ 2,13, 3,17,16],
    [ 1,17, 3,11, 9],
    [ 5, 9,11, 7,19],
    [ 6,18,19, 7,15],
    [ 3,13,15, 7,11]
  ];

  function rot(p, ax, ay, az){
    let [x,y,z] = p;
    // X
    let cy = Math.cos(ax), sy = Math.sin(ax);
    let y1 = y*cy - z*sy, z1 = y*sy + z*cy;
    y = y1; z = z1;
    // Y
    cy = Math.cos(ay); sy = Math.sin(ay);
    let x1 = x*cy + z*sy; z1 = -x*sy + z*cy;
    x = x1; z = z1;
    // Z
    cy = Math.cos(az); sy = Math.sin(az);
    x1 = x*cy - y*sy; y1 = x*sy + y*cy;
    x = x1; y = y1;
    return [x,y,z];
  }

  // Return projected dodecahedron data given rotation (radians) and scale
  function project({ rx=0, ry=0, rz=0, scale=60, cx=0, cy=0 } = {}){
    const verts = V.map(v => rot(v, rx, ry, rz));
    const verts2D = verts.map(([x,y,z]) => ({
      x: cx + x * scale,
      y: cy - y * scale, // SVG y-down
      z
    }));
    const faces = F.map((idxs, i) => {
      const pts = idxs.map(i => verts2D[i]);
      // average z
      const z = pts.reduce((s,p)=>s+p.z,0) / pts.length;
      // face normal via cross of two edges in 3D
      const v0 = verts[idxs[0]], v1 = verts[idxs[1]], v2 = verts[idxs[2]];
      const ax = v1[0]-v0[0], ay = v1[1]-v0[1], az = v1[2]-v0[2];
      const bx = v2[0]-v0[0], by = v2[1]-v0[1], bz = v2[2]-v0[2];
      const nx = ay*bz - az*by;
      const ny = az*bx - ax*bz;
      const nz = ax*by - ay*bx;
      const nlen = Math.hypot(nx,ny,nz) || 1;
      return {
        id: i,
        idxs,
        pts,
        z,
        d: pts.map((p,i)=>(i===0?'M':'L')+p.x.toFixed(2)+','+p.y.toFixed(2)).join(' ')+'Z',
        n: [nx/nlen, ny/nlen, nz/nlen],
        // centroid 3D for explode
        c3: [
          idxs.reduce((s,j)=>s+verts[j][0],0)/5,
          idxs.reduce((s,j)=>s+verts[j][1],0)/5,
          idxs.reduce((s,j)=>s+verts[j][2],0)/5
        ],
        c2: {
          x: pts.reduce((s,p)=>s+p.x,0)/5,
          y: pts.reduce((s,p)=>s+p.y,0)/5
        }
      };
    });
    // Edges (unique pairs)
    const edgeSet = new Set();
    const edges = [];
    F.forEach((idxs)=>{
      for (let i=0;i<5;i++){
        const a = idxs[i], b = idxs[(i+1)%5];
        const k = a<b ? a+'-'+b : b+'-'+a;
        if (!edgeSet.has(k)){
          edgeSet.add(k);
          edges.push([a,b]);
        }
      }
    });
    const edges2D = edges.map(([a,b]) => {
      const za = verts2D[a].z, zb = verts2D[b].z;
      return {
        x1: verts2D[a].x, y1: verts2D[a].y,
        x2: verts2D[b].x, y2: verts2D[b].y,
        z: (za+zb)/2,
        front: (za+zb)/2 > 0
      };
    });
    return { verts: verts2D, faces, edges: edges2D };
  }

  // Regular pentagon path centered at (cx,cy) radius r, apex up
  function pentagonPath(cx, cy, r, rotation=-Math.PI/2){
    let d = '';
    for (let i=0;i<5;i++){
      const a = rotation + i * (2*Math.PI/5);
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      d += (i===0?'M':'L') + x.toFixed(2) + ',' + y.toFixed(2);
    }
    return d + 'Z';
  }

  window.Dodec = { project, pentagonPath, PHI };
})();
