// import "../css/scss/style.scss";

import Tab from "./modules/tab.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import Scroll from "./modules/scroll.js";
import Show from "./modules/show.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import Form from "./modules/form.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
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

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initImgAll();
