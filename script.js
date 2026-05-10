document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.fade-in-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => io.observe(el));
});
