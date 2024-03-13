import outsideCLick from "./outsideClick.js";

export default class MenuMobile {
  constructor(button, lista) {
    this.menuButton = document.querySelector(button);
    this.menuLista = document.querySelector(lista);
    this.eventsUser = ["click", "touchstart"];
    this.active = "active";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.active);
    this.menuLista.classList.add(this.active);

    outsideCLick(this.menuLista, this.eventsUser, () => {
      this.menuButton.classList.remove(this.active);
      this.menuLista.classList.remove(this.active);
    });
  }

  addEventUser() {
    this.eventsUser.forEach((eventUser) => {
      this.menuButton.addEventListener(eventUser, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuLista) {
      this.addEventUser();
    }
    return this;
  }
}
