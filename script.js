const scenarios = [
  {
    id: "011",
    title: "Stopping Car Threading",
    short: "Scenario 01",
    query:
      "./assets/query/query_011_28f915e5f267613d_q1525__cd2ced934eff529d_d239_r12_comparison_static.png",
    base: "./assets/base/crop_011_28f915e5f267613d_q1525__cd2ced934eff529d_d239_r12_comparison.gif",
    control:
      "./assets/control/cropped_011_28f915e5f267613d_q1525__cd2ced934eff529d_d239_r12_comparison.gif",
  },
  {
    id: "035",
    title: "Cyclist Plaza Turn",
    short: "Scenario 02",
    query:
      "./assets/query/query_035_3b169f26d15c4914_q1975__8a7281e087e9ffa2_d2211_r6_comparison_static.png",
    base: "./assets/base/crop_035_3b169f26d15c4914_q1975__8a7281e087e9ffa2_d2211_r6_comparison.gif",
    control:
      "./assets/control/cropped_035_3b169f26d15c4914_q1975__8a7281e087e9ffa2_d2211_r6_comparison.gif",
  },
  {
    id: "088",
    title: "Unsignalized Crossing",
    short: "Scenario 03",
    query:
      "./assets/query/query_088_861485a5735c6b40_q117__fa1c0d98bc18f290_d2612_r29_comparison_static.png",
    base: "./assets/base/crop_088_861485a5735c6b40_q117__fa1c0d98bc18f290_d2612_r29_comparison.gif",
    control:
      "./assets/control/cropped_088_861485a5735c6b40_q117__fa1c0d98bc18f290_d2612_r29_comparison.gif",
  },
  {
    id: "116",
    title: "Meandering",
    short: "Scenario 04",
    query:
      "./assets/query/query_116_8f5f743b5b1ff851_q110__cb9aca00b2fc880f_d1457_r27_comparison_static.png",
    base: "./assets/base/crop_116_8f5f743b5b1ff851_q110__cb9aca00b2fc880f_d1457_r27_comparison.gif",
    control:
      "./assets/control/cropped_116_8f5f743b5b1ff851_q110__cb9aca00b2fc880f_d1457_r27_comparison.gif",
  },
  {
    id: "130",
    title: "Multi-Lane Weaving",
    short: "Scenario 05",
    query:
      "./assets/query/query_130_97dc2441f6ed2318_q15__8e8fbe0fdb5b1ded_d157_r11_comparison_static.png",
    base: "./assets/base/crop_130_97dc2441f6ed2318_q15__8e8fbe0fdb5b1ded_d157_r11_comparison.gif",
    control:
      "./assets/control/cropped_130_97dc2441f6ed2318_q15__8e8fbe0fdb5b1ded_d157_r11_comparison.gif",
  },
  {
    id: "163",
    title: "Tight Merging",
    short: "Scenario 06",
    query:
      "./assets/query/query_163_d0d511073be892c8_q62__764cc0f4b15c9c38_d1063_r14_comparison_static.png",
    base: "./assets/base/crop_163_d0d511073be892c8_q62__764cc0f4b15c9c38_d1063_r14_comparison.gif",
    control:
      "./assets/control/cropped_163_d0d511073be892c8_q62__764cc0f4b15c9c38_d1063_r14_comparison.gif",
  },
  {
    id: "194",
    title: "Fork Merge Turn",
    short: "Scenario 07",
    query:
      "./assets/query/query_194_e4f0f9239a41acb0_q28__1990a2a1f3af41e4_d2820_r15_comparison_static.png",
    base: "./assets/base/crop_194_e4f0f9239a41acb0_q28__1990a2a1f3af41e4_d2820_r15_comparison.gif",
    control:
      "./assets/control/cropped_194_e4f0f9239a41acb0_q28__1990a2a1f3af41e4_d2820_r15_comparison.gif",
  },
  {
    id: "231",
    title: "Aggressive U-turn Parking",
    short: "Scenario 08",
    query:
      "./assets/query/query_231_e730e70ec662302f_q1848__53489c151a69167c_d2166_r22_comparison_static.png",
    base: "./assets/base/crop_231_e730e70ec662302f_q1848__53489c151a69167c_d2166_r22_comparison.gif",
    control:
      "./assets/control/cropped_231_e730e70ec662302f_q1848__53489c151a69167c_d2166_r22_comparison.gif",
  },
];

const select = document.querySelector("#scenario-select");
const title = document.querySelector("#scenario-title");
const shortLabel = document.querySelector("#scenario-short");
const idLabel = document.querySelector("#scenario-id");
const baseImage = document.querySelector(".showcase-base");
const queryImage = document.querySelector(".showcase-query");
const controlImage = document.querySelector(".showcase-control");
const prevButton = document.querySelector("#scenario-prev");
const nextButton = document.querySelector("#scenario-next");

let activeIndex = 0;
const preloadedAssets = new Set();

function preloadAsset(src) {
  if (preloadedAssets.has(src)) {
    return;
  }
  const image = new Image();
  image.src = src;
  preloadedAssets.add(src);
}

function swapImage(imageElement, src, alt, resetAnimation = false) {
  imageElement.alt = alt;

  if (!resetAnimation) {
    imageElement.src = src;
    return;
  }

  imageElement.removeAttribute("src");
  void imageElement.offsetWidth;
  imageElement.src = `${src}?play=${Date.now()}`;
}

function renderScenario(index) {
  const scenario = scenarios[index];
  activeIndex = index;
  select.value = scenario.id;
  title.textContent = scenario.title;
  shortLabel.textContent = scenario.short;
  idLabel.textContent = `ID ${scenario.id}`;

  preloadAsset(scenario.base);
  preloadAsset(scenario.control);
  preloadAsset(scenario.query);

  swapImage(baseImage, scenario.base, `${scenario.title} base simulation`, true);
  swapImage(queryImage, scenario.query, `${scenario.title} condition image`);
  swapImage(controlImage, scenario.control, `${scenario.title} controlled simulation`, true);
}

scenarios.forEach((scenario, index) => {
  const option = document.createElement("option");
  option.value = scenario.id;
  option.textContent = `${scenario.short} - ${scenario.title}`;
  select.appendChild(option);
  preloadAsset(scenario.base);
  preloadAsset(scenario.control);
  preloadAsset(scenario.query);

  if (index === 0) {
    renderScenario(0);
  }
});

select.addEventListener("change", (event) => {
  const index = scenarios.findIndex((scenario) => scenario.id === event.target.value);
  if (index >= 0) {
    renderScenario(index);
  }
});

prevButton.addEventListener("click", () => {
  renderScenario((activeIndex - 1 + scenarios.length) % scenarios.length);
});

nextButton.addEventListener("click", () => {
  renderScenario((activeIndex + 1) % scenarios.length);
});
