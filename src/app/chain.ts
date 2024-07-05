import {defineChain, Chain} from "thirdweb";

const polygonAmoyTestnet: Chain = defineChain({
  id: 80002,
  name: "Polygon Amoy Testnet",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://80002.rpc.thirdweb.com/"],
    },
  },
  blockExplorers: {
    default: {name: "PolygonScan", url: "https://www.oklink.com/amoy"},
  },
  testnet: true,
});

export {polygonAmoyTestnet as chain};
