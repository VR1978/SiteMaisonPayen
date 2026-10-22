(function () {
  var top = document.getElementById('top');
  var btn = top && top.querySelector('.menu');

  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 12); }
  if (top) { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); }

  function close() { top.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  if (btn) {
    btn.addEventListener('click', function () {
      var open = !top.classList.contains('open');
      top.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    top.querySelectorAll('.links a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  var s = document.querySelector('.stamps');
  if (!s) return;
  if (!('IntersectionObserver' in window)) { s.classList.add('in'); return; }
  var io = new IntersectionObserver(function (e) {
    if (e[0].isIntersecting) { s.classList.add('in'); io.disconnect(); }
  }, { threshold: 0.35 });
  io.observe(s);
})();
