(function() {
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

  var nav = document.getElementById('main-nav');
  var backToTop = document.getElementById('back-to-top');

  if (nav || backToTop) {
    var lastScroll = 0;

    window.onscroll = function() {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

      if (nav) {
        if (currentScroll > 100 && currentScroll > lastScroll) {
          nav.style.top = '-120px';
        } else {
          nav.style.top = '20px';
        }
      }

      if (backToTop) {
        if (currentScroll > 200) {
          backToTop.style.opacity = '1';
          backToTop.style.transform = 'translateY(0)';
          backToTop.style.pointerEvents = 'auto';
        } else {
          backToTop.style.opacity = '0';
          backToTop.style.transform = 'translateY(12px)';
          backToTop.style.pointerEvents = 'none';
        }
      }

      lastScroll = currentScroll;
    };
  }
})();
