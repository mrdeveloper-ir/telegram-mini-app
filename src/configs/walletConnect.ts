import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { Logger } from "../utils/logger";

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

  window.open = (function (open) {
    return function (url, _, features) {
      Logger({ data: url });
      Logger({ data: _ });
      Logger({ data: features });

      return open.call(window, url, "_blank", features);
    };
  })(window.open);

  // 5. Create a Web3Modal instance
  createWeb3Modal({
    ethersConfig,
    chains: [mainnet_config],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });
};
