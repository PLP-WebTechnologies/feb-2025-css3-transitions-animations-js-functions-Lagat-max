// Load user preference from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Animate button and toggle theme
document.getElementById('animateBtn').addEventListener('click', function () {
  this.classList.add('bounce');

  // Remove animation class after it's done so it can replay
  setTimeout(() => {
    this.classList.remove('bounce');
  }, 500);
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save preference
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
