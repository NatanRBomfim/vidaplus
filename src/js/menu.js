function menuNav() {
  const menu = document.querySelector(".nav-menu");
  const btn = document.querySelector(".menu-toggle");
  const icon = document.querySelector(".menu-icon");

  let menuOpen = false;

  function closeMenu() {
    btn.setAttribute("aria-expanded", menuOpen);
    menu.classList.remove("active");
    icon.classList.add("fa-bars-staggered");
    icon.classList.remove("fa-xmark");
  }

  function openMenu() {
    icon.classList.add("fa-xmark");
    icon.classList.remove("fa-bars-staggered");
    menu.classList.add("active");
    btn.setAttribute("aria-expanded", !menuOpen);
  }

  function toggleMenu() {
    let expanded = this.getAttribute("aria-expanded") === "true";

    document.removeEventListener("click", closeMenu);

    const novoEstado = !expanded;

    this.setAttribute("aria-expanded", novoEstado);

    menu.classList.toggle("active", novoEstado);
    icon.classList.toggle("fa-bars-staggered", !novoEstado);
    icon.classList.toggle("fa-xmark", novoEstado);

    setTimeout(() => document.addEventListener("click", closeMenu), 1);
  }

  btn.addEventListener("click", toggleMenu);

  const mediaQuery = window.matchMedia("(min-width:64em)");

  function HandleMediaQueryChange(e) {
    if (e.matches) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  mediaQuery.addEventListener("change", HandleMediaQueryChange);
  HandleMediaQueryChange(mediaQuery);
}

menuNav()

const links = document.querySelectorAll(".list-middle .list-menu");

links[0].classList.add("actived");


function ativaMenu(item) {
  links.forEach((li) => li.classList.remove("actived"));

  item.classList.add("actived");
}

function ativaSide(item) {

  linksSideBar.forEach((li) => li.classList.remove("actived"));
  item.classList.add("actived");
}


function navigate(btn, page) {
  const li = btn.closest("button");

  ativaMenu(li);
  loadPage(page);

  // fecha menu no mobile
}

window.navigate = navigate;
