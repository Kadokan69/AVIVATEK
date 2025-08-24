export function mainJs() {
  const burger = document.getElementById("burger-menu");
  const nav = document.getElementById("nav-menu");
  const cross = document.getElementById("cross-menu");
  const overlay = document.getElementById("menu-overlay");
  const sublist = document.querySelector(".nav__sublist");
  const dropdown = document.querySelector(".nav__dropdown");

  function openMenu() {
    nav.classList.add("open");
    burger.classList.add("active");
    overlay.classList.add("open");
  }
  function closeMenu() {
    nav.classList.remove("open");
    burger.classList.remove("active");
    overlay.classList.remove("open");
  }

  dropdown.addEventListener("mouseenter", function () {
    sublist.classList.add("active");
  });
  dropdown.addEventListener("mouseleave", function () {
    sublist.classList.remove("active");
  });

  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    if (nav.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  cross.addEventListener("click", function (e) {
    e.stopPropagation();
    closeMenu();
  });
  overlay.addEventListener("click", function () {
    closeMenu();
  });
  // При клике вне меню — закрыть
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });
  const element = document.querySelector(".guarantee");
  element.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const item = document.querySelector(".guarantee__img");

    if (window.innerWidth > 958) {
      item.style.transform = `translate(calc(-50% - ${((x - width / 2) / 100) * 1.85}px), calc(-50% - ${
        ((y - height / 2) / 100) * 1.85
      }px))`;
    }
  });
}
