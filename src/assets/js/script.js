// import "../css/scss/style.scss";

import Tab from "./modules/tab.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import Scroll from "./modules/scroll.js";
import Show from "./modules/show.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import Form from "./modules/form.js";
import FetchAnimais from "./modules/fetch-animais.js";
import FetchBitcoin from "./modules/fetch-bitcoin.js";
import initImgAll from "./modules/img-all.js";

const tab = new Tab(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
  "ativo"
);
tab.init();

const accordion = new Accordion("[data-anime='accordion'] dt", "ativo");
accordion.init();

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

const form = new Form("#contato-form");
form.init();

const scroll = new Scroll("[data-anime='scroll']");
scroll.init();

const show = new Show(".animais-descricoes section");
show.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]", "touchstart", "click");
dropdownMenu.init();

const tooltip = new Tooltip("[data-tooltip] img");
tooltip.init();

const menuMobile = new MenuMobile(
  "[data-menu='button']",
  "[data-menu='lista']"
);
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

const fetchAnimais = new FetchAnimais("../../../../animaisapi.json");
fetchAnimais.init();

const fetchBitcoin = new FetchBitcoin("https://blockchain.info/ticker");
fetchBitcoin.init();

initImgAll();
