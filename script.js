document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY - 88;
    const dist = end - start;
    const dur = 600;
    let startTime = null;
    function step(now) {
      if (!startTime) startTime = now;
      const t = Math.min((now - startTime) / dur, 1);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      window.scrollTo(0, start + dist * ease);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
});
