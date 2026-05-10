/* logo-anim.js — Animated dodecahedron nav logo (03 · horizontal · light/dark)
   Requires dodecahedron.js (window.Dodec) to be loaded first. */
(function () {
  var MARK_SIZE = 60;
  var PALETTE = ['#4A0072','#5B21B6','#6D28D9','#7C3AED','#8B5CF6','#A78BFA','#818CF8','#E879F9','#C084FC','#9333EA'];

  function pickColor(f) {
    var t = (f.n[0] * 0.3 + f.n[1] * 0.5 + f.n[2] * 0.4 + 1) / 2;
    var i = Math.max(0, Math.min(PALETTE.length - 1, Math.floor(t * (PALETTE.length - 1))));
    return PALETTE[i];
  }

  function buildMarkSVG(size) {
    var data = window.Dodec.project({ rx: -0.3, ry: 0.5, scale: size * 0.42, cx: size / 2, cy: size / 2 });
    var visible = data.faces
      .filter(function (f) { return f.n[2] > 0.001; })
      .sort(function (a, b) { return a.z - b.z; });

    var outerRound = Math.max(3, size * 0.06);
    var stdDev = (outerRound * 0.6).toFixed(2);

    var facePaths = visible.map(function (f) {
      var c = pickColor(f);
      return '<path d="' + f.d + '" fill="' + c + '" stroke="' + c + '" stroke-width="0.5"/>';
    }).join('');

    var edgePaths = visible.map(function (f) {
      return '<path d="' + f.d + '" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="0.6" stroke-linejoin="miter"/>';
    }).join('');

    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
      + '<defs>'
      + '<filter id="logo-round-' + size + '" x="-10%" y="-10%" width="120%" height="120%">'
      + '<feGaussianBlur in="SourceGraphic" stdDeviation="' + stdDev + '"/>'
      + '<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"/>'
      + '<feComposite in="SourceGraphic" in2="filtered" operator="atop"/>'
      + '</filter>'
      + '</defs>'
      + '<g filter="url(#logo-round-' + size + ')">' + facePaths + '</g>'
      + edgePaths
      + '</svg>';
  }

  function buildNavLogo(img) {
    var container = document.createElement('div');
    container.className = 'nav-logo-anim';
    container.setAttribute('role', 'img');
    container.setAttribute('aria-label', 'So-lid Solutions');

    // Mark column (bounce wrapper + shadow)
    var markWrap = document.createElement('div');
    markWrap.className = 'nav-logo-anim__mark-wrap';

    var bounce = document.createElement('div');
    bounce.className = 'nav-logo-anim__bounce';

    var spin = document.createElement('div');
    spin.className = 'nav-logo-anim__spin';
    spin.innerHTML = buildMarkSVG(MARK_SIZE);

    bounce.appendChild(spin);

    var shadow = document.createElement('div');
    shadow.className = 'nav-logo-anim__shadow';

    markWrap.appendChild(bounce);
    markWrap.appendChild(shadow);

    // Text column
    var text = document.createElement('div');
    text.className = 'nav-logo-anim__text';

    var main = document.createElement('div');
    main.className = 'nav-logo-anim__main';
    main.textContent = 'so-lid';

    var sub = document.createElement('div');
    sub.className = 'nav-logo-anim__sub';
    sub.textContent = 'SOLUTIONS';

    text.appendChild(main);
    text.appendChild(sub);

    container.appendChild(markWrap);
    container.appendChild(text);

    img.parentNode.replaceChild(container, img);
  }

  function buildFooterLogo(img) {
    var size = 48;
    var wrap = document.createElement('div');
    wrap.className = 'footer-logo-anim';
    wrap.setAttribute('role', 'img');
    wrap.setAttribute('aria-label', 'So-lid Solutions');

    var mark = document.createElement('div');
    mark.innerHTML = buildMarkSVG(size);
    mark.className = 'footer-logo-anim__mark';

    var text = document.createElement('div');
    text.className = 'footer-logo-anim__text';

    var main = document.createElement('div');
    main.className = 'footer-logo-anim__main';
    main.textContent = 'so-lid';

    var sub = document.createElement('div');
    sub.className = 'footer-logo-anim__sub';
    sub.textContent = 'SOLUTIONS';

    text.appendChild(main);
    text.appendChild(sub);
    wrap.appendChild(mark);
    wrap.appendChild(text);

    img.parentNode.replaceChild(wrap, img);
  }

  function showFallback() {
    document.querySelectorAll('.site-nav__logo-img, .site-footer__logo-img').forEach(function(img) {
      img.style.display = '';
    });
  }

  function init() {
    if (!window.Dodec) { showFallback(); return; }

    // Nav logos
    var navImgs = document.querySelectorAll('.site-nav__logo-img');
    navImgs.forEach(buildNavLogo);

    // Footer logos
    var footerImgs = document.querySelectorAll('.site-footer__logo-img');
    footerImgs.forEach(buildFooterLogo);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
