import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "My wagmi + ConnectKit + Juicebox App",
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID!,
  })
);
