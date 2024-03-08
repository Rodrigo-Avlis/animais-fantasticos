export default class Tab {
  constructor(li, section, activo) {
    this.tabmenu = document.querySelectorAll(li);
    this.tabcontent = document.querySelectorAll(section);
    this.activeClass = activo;
  }

  activeTab(index) {
    const direcao = this.tabcontent[index].dataset.anime;

    this.tabcontent.forEach((section) => {
      section.classList.remove(this.activeClass, direcao);
    });
    this.tabcontent[index].classList.add(this.activeClass, direcao);
  }

  addTab() {
    this.tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      this.activeTab(0);
      this.addTab();
    }
    return this;
  }
}
