import outsideCLick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");
  const eventsUser = ["touchstart", "click"];

  function ativaDropdown(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideCLick(this, eventsUser, () => {
      this.classList.remove("active");
    });
  }

  if (dropdownMenu.length) {
    dropdownMenu.forEach((menu) => {
      eventsUser.forEach((eventUser) => {
        menu.addEventListener(eventUser, ativaDropdown);
      });
    });
  }
}
