export default function initShow() {
  const animaisDescricao = document.querySelectorAll(
    ".animais-descricoes section"
  );

  if (animaisDescricao.length) {
    animaisDescricao.forEach((section, index) => {
      if (index % 2 === 0) {
        section.setAttribute("data-anime", "show-down");
      } else {
        section.setAttribute("data-anime", "show-right");
      }
    });
  }
}
