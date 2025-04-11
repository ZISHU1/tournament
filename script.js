
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Join button animation
  const joinBtn = document.querySelector('.join-btn');
  joinBtn.addEventListener('click', () => {
    joinBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      joinBtn.style.transform = 'scale(1)';
      alert('Registration will open soon!');
    }, 150);
  });

  // Parallax effect on header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
  });
});
