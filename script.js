(function() {
  var nav = document.getElementById('main-nav');
  if (!nav) return;

  var lastScroll = window.scrollY || 0;

  window.addEventListener('scroll', function() {
    var currentScroll = window.scrollY || 0;
    if (currentScroll > 80 && currentScroll > lastScroll) {
      nav.style.transform = 'translate(-50%, -120px)';
      nav.style.opacity = '0';
      nav.style.pointerEvents = 'none';
    } else {
      nav.style.transform = 'translate(-50%, 0)';
      nav.style.opacity = '1';
      nav.style.pointerEvents = '';
    }
    lastScroll = currentScroll;
  }, { passive: true });

  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      var start = window.scrollY || 0;
      var end = target.getBoundingClientRect().top + start - 100;
      var dist = end - start;
      var dur = 600;
      var startTime = null;
      function step(now) {
        if (!startTime) startTime = now;
        var t = Math.min((now - startTime) / dur, 1);
        var ease = t < .5 ? 2*t*t : -1+(4-2*t)*t;
        window.scrollTo(0, start + dist*ease);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  });
})();
