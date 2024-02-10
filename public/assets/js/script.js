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

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  if (linksInternos.length) {
    function activeScrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", activeScrollSuave);
    });
  }
}
initScrollSuave();

function initScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    function activeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const halfWindow = window.innerHeight * 0.6;
        const isSectionVisible = sectionTop - halfWindow < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    activeScroll();
    window.addEventListener("scroll", activeScroll);
  }
}
initScroll();
