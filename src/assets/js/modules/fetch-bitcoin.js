export default class FetchBitcoin {
  constructor(url) {
    this.url = url;
  }

  // eslint-disable-next-line
  async activeBitcoin(url) {
    const bitcoinFetch = fetch(url);
    if (bitcoinFetch) {
      try {
        const bitcoinJson = await (await bitcoinFetch).json();

        const btnPreco = document.querySelector(".btc-preco");
        btnPreco.innerText = (100 / bitcoinJson.BRL.sell).toFixed(4);
      } catch (erro) {
        console.log(Error(erro));
      }
    }
  }

  init() {
    if (this.url) {
      this.activeBitcoin(this.url);
    }
    return this;
  }
}
