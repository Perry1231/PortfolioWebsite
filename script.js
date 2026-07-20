(function() {
  if (localStorage.getItem('th') === 'dark') {
    document.body.classList.add('dark');
  }

  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      localStorage.setItem('th', document.body.classList.contains('dark') ? 'dark' : '');
    });
  }

  var nav = document.getElementById('main-nav');
  if (nav) {
    var lastScroll = window.scrollY || 0;

    window.addEventListener('scroll', function() {
      var currentScroll = window.scrollY || 0;
      if (currentScroll > 100 && currentScroll > lastScroll) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    function updateBackToTop() {
      if (window.scrollY > 200) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
