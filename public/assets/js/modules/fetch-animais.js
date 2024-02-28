import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  const url = "../../../../animaisapi.json";

  if (url) {
    async function fetchAnimais(url) {
      const numeroAnimal = document.querySelector(".numeros-grid");
      const animaisResponse = fetch(url);
      const animaisJson = await (await animaisResponse).json();

      animaisJson.forEach((animal) => {
        const animalElement = createAnimal(animal);
        numeroAnimal.appendChild(animalElement);
      });
      initAnimaNumeros();
    }

    function createAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.numeros}</span>`;

      return div;
    }
    fetchAnimais(url);
  }
}
