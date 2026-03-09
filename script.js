const scenarios = [
  {
    id: "011",
    title: "Scenario 01",
    query:
      "./assets/query/query_011_28f915e5f267613d_q1525__cd2ced934eff529d_d239_r12_comparison_static.png",
    base: "./assets/base/crop_011_28f915e5f267613d_q1525__cd2ced934eff529d_d239_r12_comparison.gif",
    control:
      "./assets/control/cropped_011_28f915e5f267613d_q1525__cd2ced934eff529d_d239_r12_comparison.gif",
  },
  {
    id: "035",
    title: "Scenario 02",
    query:
      "./assets/query/query_035_3b169f26d15c4914_q1975__8a7281e087e9ffa2_d2211_r6_comparison_static.png",
    base: "./assets/base/crop_035_3b169f26d15c4914_q1975__8a7281e087e9ffa2_d2211_r6_comparison.gif",
    control:
      "./assets/control/cropped_035_3b169f26d15c4914_q1975__8a7281e087e9ffa2_d2211_r6_comparison.gif",
  },
  {
    id: "088",
    title: "Scenario 03",
    query:
      "./assets/query/query_088_861485a5735c6b40_q117__fa1c0d98bc18f290_d2612_r29_comparison_static.png",
    base: "./assets/base/crop_088_861485a5735c6b40_q117__fa1c0d98bc18f290_d2612_r29_comparison.gif",
    control:
      "./assets/control/cropped_088_861485a5735c6b40_q117__fa1c0d98bc18f290_d2612_r29_comparison.gif",
  },
  {
    id: "116",
    title: "Scenario 04",
    query:
      "./assets/query/query_116_8f5f743b5b1ff851_q110__cb9aca00b2fc880f_d1457_r27_comparison_static.png",
    base: "./assets/base/crop_116_8f5f743b5b1ff851_q110__cb9aca00b2fc880f_d1457_r27_comparison.gif",
    control:
      "./assets/control/cropped_116_8f5f743b5b1ff851_q110__cb9aca00b2fc880f_d1457_r27_comparison.gif",
  },
  {
    id: "130",
    title: "Scenario 05",
    query:
      "./assets/query/query_130_97dc2441f6ed2318_q15__8e8fbe0fdb5b1ded_d157_r11_comparison_static.png",
    base: "./assets/base/crop_130_97dc2441f6ed2318_q15__8e8fbe0fdb5b1ded_d157_r11_comparison.gif",
    control:
      "./assets/control/cropped_130_97dc2441f6ed2318_q15__8e8fbe0fdb5b1ded_d157_r11_comparison.gif",
  },
  {
    id: "163",
    title: "Scenario 06",
    query:
      "./assets/query/query_163_d0d511073be892c8_q62__764cc0f4b15c9c38_d1063_r14_comparison_static.png",
    base: "./assets/base/crop_163_d0d511073be892c8_q62__764cc0f4b15c9c38_d1063_r14_comparison.gif",
    control:
      "./assets/control/cropped_163_d0d511073be892c8_q62__764cc0f4b15c9c38_d1063_r14_comparison.gif",
  },
  {
    id: "194",
    title: "Scenario 07",
    query:
      "./assets/query/query_194_e4f0f9239a41acb0_q28__1990a2a1f3af41e4_d2820_r15_comparison_static.png",
    base: "./assets/base/crop_194_e4f0f9239a41acb0_q28__1990a2a1f3af41e4_d2820_r15_comparison.gif",
    control:
      "./assets/control/cropped_194_e4f0f9239a41acb0_q28__1990a2a1f3af41e4_d2820_r15_comparison.gif",
  },
  {
    id: "231",
    title: "Scenario 08",
    query:
      "./assets/query/query_231_e730e70ec662302f_q1848__53489c151a69167c_d2166_r22_comparison_static.png",
    base: "./assets/base/crop_231_e730e70ec662302f_q1848__53489c151a69167c_d2166_r22_comparison.gif",
    control:
      "./assets/control/cropped_231_e730e70ec662302f_q1848__53489c151a69167c_d2166_r22_comparison.gif",
  },
];

const grid = document.querySelector("#demo-grid");
const template = document.querySelector("#card-template");
const lightbox = document.querySelector("#lightbox");
const lightboxClose = document.querySelector("#lightbox-close");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxBase = document.querySelector(".lightbox-base");
const lightboxQuery = document.querySelector(".lightbox-query");
const lightboxControl = document.querySelector(".lightbox-control");

function openLightbox(scenario) {
  lightboxTitle.textContent = `${scenario.title} · ${scenario.id}`;
  lightboxBase.src = scenario.base;
  lightboxBase.alt = `${scenario.title} base scenario animation`;
  lightboxQuery.src = scenario.query;
  lightboxQuery.alt = `${scenario.title} query image`;
  lightboxControl.src = scenario.control;
  lightboxControl.alt = `${scenario.title} control result animation`;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

scenarios.forEach((scenario) => {
  const card = template.content.cloneNode(true);
  const cardRoot = card.querySelector(".card");

  cardRoot.querySelector(".card-title").textContent = `${scenario.title} · ${scenario.id}`;
  cardRoot.querySelector(".card-tag").textContent = scenario.id;
  cardRoot.setAttribute("aria-label", `Open ${scenario.title} ${scenario.id} in focused view`);

  const queryImage = cardRoot.querySelector(".query-image");
  queryImage.src = scenario.query;
  queryImage.alt = `${scenario.title} query image`;

  const baseImage = cardRoot.querySelector(".base-image");
  baseImage.src = scenario.base;
  baseImage.alt = `${scenario.title} base scenario animation`;

  const controlImage = cardRoot.querySelector(".control-image");
  controlImage.src = scenario.control;
  controlImage.alt = `${scenario.title} control result animation`;

  cardRoot.addEventListener("click", () => openLightbox(scenario));
  cardRoot.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(scenario);
    }
  });

  grid.appendChild(card);
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
