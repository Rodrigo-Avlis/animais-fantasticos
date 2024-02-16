export default function initAnimaNumeros() {
  const observerTarget = document.querySelector(".numeros");

  if (observerTarget) {
    const observa = new MutationObserver(handleMutation);
    observa.observe(observerTarget, { attributes: true });

    function handleMutation(mutation) {
      if (mutation[0].target.classList.contains("ativo")) {
        observa.disconnect();
        animaNumeros();
      }
    }

    function animaNumeros() {
      const numeros = document.querySelectorAll("[data-numero]");

      if (numeros.length) {
        numeros.forEach((numero) => {
          const total = +numero.innerText;
          const incremento = Math.floor(total / 100);

          let start = 0;
          const timer = setInterval(() => {
            start += incremento;
            numero.innerText = start;

            if (start > total) {
              numero.innerText = total;
              clearInterval(timer);
            }
          }, 10 * Math.random());
        });
      }
    }
  }
}
