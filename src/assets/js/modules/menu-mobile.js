import outsideCLick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuLista = document.querySelector("[data-menu='lista']");
  const eventsUser = ["click", "touchstart"];

  function openMenu() {
    menuButton.classList.add("active");
    menuLista.classList.add("active");

    outsideCLick(menuLista, eventsUser, () => {
      menuButton.classList.remove("active");
      menuLista.classList.remove("active");
    });
  }

  if (menuButton && menuLista) {
    eventsUser.forEach((eventUser) => {
      menuButton.addEventListener(eventUser, openMenu);
    });
  }
}
