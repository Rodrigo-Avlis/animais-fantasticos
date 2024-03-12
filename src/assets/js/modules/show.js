export default class Show {
  constructor(section) {
    this.animaisDescricao = document.querySelectorAll(section);
  }

  addSection() {
    this.animaisDescricao.forEach((section, index) => {
      if (index % 2 === 0) {
        section.setAttribute("data-anime", "show-down");
      } else {
        section.setAttribute("data-anime", "show-right");
      }
    });
  }

  init() {
    if (this.animaisDescricao.length) {
      this.addSection();
    }
    return this;
  }
}
