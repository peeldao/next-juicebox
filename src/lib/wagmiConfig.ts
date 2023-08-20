import { getDefaultConfig } from "connectkit";
import { goerli } from "viem/chains";
import { createConfig, mainnet } from "wagmi";

export const wagmiConfig = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "My wagmi + ConnectKit + Juicebox App",
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID!,
    chains: [mainnet, goerli],
  })
);
