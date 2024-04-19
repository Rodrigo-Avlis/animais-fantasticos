import outsideCLick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdown, eventsUser) {
    this.dropdownMenu = document.querySelectorAll(dropdown);
    if (eventsUser === undefined) {
      this.eventsUser = ["touchstart", "click"];
    } else {
      this.eventsUser = eventsUser;
    }
    this.active = "active";
    this.ativaDropdown = this.ativaDropdown.bind(this);
  }

  ativaDropdown(event) {
    const element = event.currentTarget;
    event.preventDefault();

    element.classList.add(this.active);
    outsideCLick(element, this.eventsUser, () => {
      element.classList.remove(this.active);
    });
  }

  addDropDownmenu() {
    this.dropdownMenu.forEach((menu) => {
      this.eventsUser.forEach((eventUser) => {
        menu.addEventListener(eventUser, this.ativaDropdown);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropDownmenu();
    }
    return this;
  }
}
