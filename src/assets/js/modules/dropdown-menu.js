import outsideCLick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdown, touch, click) {
    this.dropdownMenu = document.querySelectorAll(dropdown);
    this.eventsUser = [touch, click];
    this.active = "active";
  }

  ativaDropdown(event) {
    event.preventDefault();
    this.classList.add(this.active);
    outsideCLick(this, this.eventsUser, () => {
      this.classList.remove(this.active);
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
