export default class Accordion {
  constructor(elemento, classe) {
    this.dts = document.querySelectorAll(elemento);
    this.activeClass = classe;
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordion() {
    this.dts.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.dts.length) {
      this.toggleAccordion(this.dts[0]);
      this.addAccordion();
    }
    return this;
  }
}
