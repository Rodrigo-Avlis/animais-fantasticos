import outsideCLick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");
  const eventsUser = ["touchstart", "click"];

  if (dropdownMenu.length) {
    function ativaDropdown(event) {
      event.preventDefault();
      this.classList.add("active");
      outsideCLick(this, eventsUser, () => {
        this.classList.remove("active");
      });
    }

    dropdownMenu.forEach((menu) => {
      eventsUser.forEach((eventUser) => {
        menu.addEventListener(eventUser, ativaDropdown);
      });
    });
  }
}
