function initTab() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "ativo";

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add(activeClass);

    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabcontent[index].classList.add(activeClass);
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTab();

function initAccordion() {
  const dts = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (dts.length) {
    dts[0].classList.add(activeClass);
    dts[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    dts.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
