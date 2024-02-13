export default function initShow() {
  let animaisDescricao = document.querySelectorAll(
    ".animais-descricoes section"
  );

  if (animaisDescricao.length) {
    animaisDescricao.forEach((section, index) => {
      index % 2 === 0
        ? section.setAttribute("data-anime", "show-down")
        : section.setAttribute("data-anime", "show-right");
    });
  }
}
