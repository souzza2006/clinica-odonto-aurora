const openMenu = document.getElementById('openMenu');
const setMenu = (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen);
  openMenu.setAttribute('aria-expanded', String(isOpen));
};

openMenu.addEventListener('click', () => setMenu(true));
document.getElementById('closeMenu').addEventListener('click', () => setMenu(false));
document.getElementById('scrim').addEventListener('click', () => setMenu(false));
document.querySelectorAll('.drawer a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});
addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
