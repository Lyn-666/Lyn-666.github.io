const links = [...document.querySelectorAll('.nav-links a')];
function updateNavigation() {
  let current = 0;
  links.forEach((link, index) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.3) current = index;
  });
  links.forEach((link, index) => {
    link.classList.toggle('active', index === current);
    if (index === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateNavigation, {passive: true});
window.addEventListener('resize', updateNavigation);
updateNavigation();
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
// Compatibility for the separate Flask route navigation.
function showMenu() {
  const list = document.querySelector('.nav_list');
  if (!list) return;
  const open = list.classList.toggle('open');
  document.querySelector('.mobile-toggle')?.setAttribute('aria-expanded', String(open));
}
