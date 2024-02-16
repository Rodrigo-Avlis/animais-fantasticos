import outsideCLick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuLista = document.querySelector("[data-menu='lista']");
  const eventsUser = ["click", "touchstart"];

  if (menuButton && menuLista) {
    function openMenu() {
      menuButton.classList.add("active");
      menuLista.classList.add("active");

      outsideCLick(menuLista, eventsUser, () => {
        menuButton.classList.remove("active");
        menuLista.classList.remove("active");
      });
    }
    eventsUser.forEach((eventUser) => {
      menuButton.addEventListener(eventUser, openMenu);
    });
  }
}
