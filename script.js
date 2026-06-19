(function() {
  var nav = document.getElementById('main-nav') || document.querySelector('.nav');
  if (!nav) return;

  var lastScroll = window.scrollY || 0;
  var ticking = false;

  function updateNav() {
    var currentScroll = window.scrollY || 0;
    if (currentScroll > 80 && currentScroll > lastScroll) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
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
        var ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        window.scrollTo(0, start + dist * ease);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  });
})();
