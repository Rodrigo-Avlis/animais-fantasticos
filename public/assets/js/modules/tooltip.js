export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip] img");

  if (tooltips.length) {
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", onMouseOver);
    });

    function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this);

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener("mousemove", onMouseMove);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);
    }

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 10}px`;
        this.tooltipBox.style.left = `${event.pageX + 10}px`;
      },
    };

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mousemove", onMouseMove);
        this.element.removeEventListener("mouseleave", onMouseLeave);
      },
    };

    function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");

      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }
  }
}
