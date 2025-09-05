import { mainJs } from "./index.js";
import { Modal } from "./modal.js";
import { Portfolio } from "./portfolio.js";
import { Video } from "./videoPopup.js";
import { ContentPopup } from "./content.js";

document.addEventListener('DOMContentLoaded', function() {
  mainJs();
  Modal();
  Portfolio();
  ContentPopup()
  Video();
});