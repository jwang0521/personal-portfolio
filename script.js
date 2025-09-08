function toggleMenu() {
  const menu =
    document.querySelector(".menu-links"); /*targetting the whole menu-links*/
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
