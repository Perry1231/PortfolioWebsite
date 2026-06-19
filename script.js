var lastScroll = 0;
var nav = document.querySelector('.nav');
var ticking = false;

window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(function() {
      var currentScroll = window.scrollY;
      if (currentScroll > 80 && currentScroll > lastScroll) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
      lastScroll = currentScroll;
      ticking = false;
    });
    ticking = true;
  }
});

document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    var start = window.scrollY;
    var end = target.getBoundingClientRect().top + window.scrollY - 100;
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


