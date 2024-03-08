export default function initFetchBitcoin() {
  async function activeBitcoin() {
    const bitcoinFetch = fetch("https://blockchain.info/ticker");
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
  activeBitcoin();
}
