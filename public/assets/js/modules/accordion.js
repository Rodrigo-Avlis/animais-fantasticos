export default function initAccordion() {
  const dts = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (dts.length) {
    dts[0].classList.add(activeClass);
    dts[0].nextElementSibling.classList.add(activeClass);

    dts.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
