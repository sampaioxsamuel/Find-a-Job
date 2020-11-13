const menuContainer = document.querySelector('[data-menu="container"]');
const menuContainerIcon = document.querySelector(
  '[data-menu="icon-container"]',
);
const menuIcon = document.querySelector('[data-menu="icon"]');
const menuLinks = document.querySelector('[data-menu="link"]');
const menuLogin = document.querySelector('[data-menu="login"]');

menuContainerIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menuContainer.classList.toggle('active');
  menuLinks.classList.toggle('active');
  menuLogin.classList.toggle('active');
});
