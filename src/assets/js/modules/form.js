export default class initForm {
  constructor(form) {
    this.form = document.querySelector(form);
    this.dados = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;

    if (!target.checkValidity()) {
      target.classList.remove("valido");
      target.classList.add("invalido");

      // target.setCustomValidity("Este campo é importante!");
      this.form.name.setCustomValidity("Digite seu nome!");
      target.nextElementSibling.innerText = target.validationMessage;

      this.dados[target.name] = target.value;
    } else {
      target.classList.remove("invalido");
      target.classList.add("valido");

      this.form.name.setCustomValidity("");
      target.nextElementSibling.innerText = target.validationMessage;

      this.dados[target.name] = target.value;
    }
  }

  addForm() {
    this.form.addEventListener("change", this.handleChange);
  }

  init() {
    if (this.form) {
      this.addForm();
    }
    return this;
  }
}
