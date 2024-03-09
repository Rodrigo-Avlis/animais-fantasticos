// import "../css/scss/style.scss";

import Tab from "./modules/tab.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import initScroll from "./modules/scroll.js";
import initShow from "./modules/show.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initForm from "./modules/form.js";
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

initShow();
initScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initForm();
initFetchAnimais();
initFetchBitcoin();
initImgAll();
