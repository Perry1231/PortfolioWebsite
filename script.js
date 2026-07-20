(function() {
  function init() {
    var nav = document.getElementById('main-nav');
    var backToTop = document.getElementById('back-to-top');

    if (!nav || !backToTop) return;

    var lastScroll = window.scrollY || 0;
    var ticking = false;

    function onScroll() {
      var currentScroll = window.scrollY || 0;

      if (currentScroll > 80 && currentScroll > lastScroll) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }

      if (currentScroll > 200) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }

      lastScroll = currentScroll;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      if (localStorage.getItem('th') === 'dark') {
        document.body.classList.add('dark');
      }
      themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        localStorage.setItem('th', document.body.classList.contains('dark') ? 'dark' : '');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
