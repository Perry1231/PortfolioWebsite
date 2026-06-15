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

var heroRight = document.getElementById('hero-right');
var hero = document.getElementById('hero');
if (heroRight && hero) {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      heroRight.classList.toggle('hidden', !entry.isIntersecting);
    });
  }, { threshold: 0.3 });
  observer.observe(hero);
}
