import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB77368698bD442579902B1c43DfF1543894a03F0"
);

export default instance;
