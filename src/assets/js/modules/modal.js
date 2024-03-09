export default class Modal {
  constructor(open, close, container) {
    this.botaoAbrir = document.querySelector(open);
    this.botaoFechar = document.querySelector(close);
    this.modalContainer = document.querySelector(container);
    this.active = "ativo";

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle(this.active);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModal() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModal();
    }
    return this;
  }
}
