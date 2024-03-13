import initAnimaNumeros from "./anima-numeros.js";

export default class FetchAnimais {
  constructor(path) {
    this.url = path;
  }

  // eslint-disable-next-line
  createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.numeros}</span>`;

    return div;
  }

  preencherAnimais(numeroAnimal, animaisJson) {
    animaisJson.forEach((animal) => {
      const animalElement = this.createAnimal(animal);
      numeroAnimal.appendChild(animalElement);
    });
  }

  // eslint-disable-next-line no-shadow
  async fetchAnimais(url) {
    const numeroAnimal = document.querySelector(".numeros-grid");
    const animaisResponse = fetch(url);
    const animaisJson = await (await animaisResponse).json();
    this.preencherAnimais(numeroAnimal, animaisJson);

    initAnimaNumeros();
  }

  init() {
    if (this.url) {
      this.fetchAnimais(this.url);
    }
    return this;
  }
}
