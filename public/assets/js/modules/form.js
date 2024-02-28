export default function initForm() {
  const form = document.querySelector("#contato-form");
  const dados = {};
  function handleChange(event) {
    const target = event.target;

    if (!target.checkValidity()) {
      target.classList.add("invalido");
      form.name.setCustomValidity("Digite seu nome!");
      // target.setCustomValidity("Este campo é importante!");
      target.nextElementSibling.innerText = target.validationMessage;

      dados[event.target.name] = event.target.value;
    }
  }
  form.addEventListener("change", handleChange);
}
