export default function initScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

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
