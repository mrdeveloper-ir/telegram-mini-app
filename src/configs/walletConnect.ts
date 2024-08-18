import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const createWalletConnectModal = () => {
  // 1. Get projectId
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
    url: "https://mrdeveloper-ir.github.io/telegram-mini-app/", // origin must match your domain & subdomain
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
    rpcUrl: "...", // used for the Coinbase SDK
    defaultChainId: 1, // used for the Coinbase SDK
  });

  // 5. Create a Web3Modal instance
  createWeb3Modal({
    ethersConfig,
    chains: [mainnet_config],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });
};
