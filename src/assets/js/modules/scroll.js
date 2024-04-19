export default class Scroll {
  constructor(scroll) {
    this.sections = document.querySelectorAll(scroll);
    this.active = "ativo";
    this.activeScroll = this.activeScroll.bind(this);
  }

  activeScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const halfWindow = window.innerHeight * 0.6;
      const isSectionVisible = sectionTop - halfWindow < 0;

      if (isSectionVisible) {
        section.classList.add(this.active);
      } else if (section.classList.contains(this.active)) {
        section.classList.remove(this.active);
      }
    });
  }

  addScroll() {
    window.addEventListener("scroll", this.activeScroll);
  }

  init() {
    if (this.sections.length) {
      this.addScroll();
      this.activeScroll();
    }
    return this;
  }
}
