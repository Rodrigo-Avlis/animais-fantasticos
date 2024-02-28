export default function initTab() {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabcontent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "ativo";

  function activeTab(index) {
    const direcao = tabcontent[index].dataset.anime;

    tabcontent.forEach((section) => {
      section.classList.remove(activeClass, direcao);
    });
    tabcontent[index].classList.add(activeClass, direcao);
  }

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add(activeClass);

    tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
