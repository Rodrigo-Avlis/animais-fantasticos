export default class Funcionamento {
  constructor(data) {
    this.funcionamento = document.querySelector(data);
  }

  initFuncionamento() {
    const diasSemana = this.funcionamento.dataset.semana
      .split(",")
      .map((dia) => +dia);
    const horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto =
      horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

    if (semanaAberta && horarioAberto) {
      this.funcionamento.classList.add("aberto");
    }
  }

  init() {
    if (this.funcionamento) {
      this.initFuncionamento();
    }
    return this;
  }
}
