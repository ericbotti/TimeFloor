const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Test1";
const baseUri = "image.png";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Background" },
      { name: "Rectangle_1" },
      { name: "Rectangle_2" },
      { name: "Logo" },
      { name: "2_Months_July_Days" },
      { name: "2_Months_July_Month" },
      { name: "2_Months_MJJ_ADBC" },
      { name: "2_Months_MJJ_0010" },
      { name: "2_Months_MJJ_0001" },
      { name: "Arrow_01" },
      { name: "Arrow_02" },
      { name: "Arrow_03" },
      { name: "Arrow_04" },
      { name: "Arrow_05" },
      { name: "Arrow_06" },
      { name: "Arrow_07" },
      { name: "Arrow_08" },
      { name: "Arrow_09" },
      { name: "Arrow_10" },
      { name: "Arrow_11" },
      { name: "Arrow_12" },
      { name: "Arrow_13" },
      { name: "Arrow_14" },
      { name: "Arrow_15" },
      { name: "Arrow_16" },
      { name: "Arrow_17" },
      { name: "Arrow_18" },
      { name: "Arrow_19" },
      { name: "Arrow_20" },
      { name: "Arrow_21" },
      { name: "Arrow_22" },
      { name: "Arrow_23" },
      { name: "Arrow_24" },
      { name: "Arrow_25" },
      { name: "Arrow_26" },
      { name: "Arrow_27" },
      { name: "Arrow_28" },
      { name: "Arrow_29" },
      { name: "Arrow_30" },
      { name: "Arrow_31" },
      { name: "Arrow_32" },
      { name: "Arrow_33" },
      { name: "Arrow_34" },
      { name: "Arrow_35" },
      { name: "Arrow_36" },
      { name: "Arrow_37" },
      { name: "Arrow_38" },
      { name: "Arrow_39" },
      { name: "Arrow_40" },
      { name: "Arrow_41" },
      { name: "Arrow_42" },
      { name: "Arrow_43" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1920,
  height: 1281,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
