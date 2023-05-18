export const settingsKeys = ["show-testnet-explorers"] as const;
export type SettingsKey = (typeof settingsKeys)[number];

interface Explorer {
  title: string;
  baseUrl: string;
}

export const mainnetExplorers: Explorer[] = [
  {
    title: "Etherscan",
    baseUrl: "https://etherscan.io/address/",
  },
  {
    title: "OpenSea",
    baseUrl: "https://opensea.io/",
  },
  {
    title: "Polygonscan",
    baseUrl: "https://polygonscan.com/address/",
  },
  {
    title: "Optimism",
    baseUrl: "https://optimistic.etherscan.io/address/",
  },
  {
    title: "Arbiscan",
    baseUrl: "https://arbiscan.io/address/",
  },
];

export const testnetExplorers: Explorer[] = [
  {
    title: "🚧 Goerli",
    baseUrl: "https://goerli.etherscan.io/address/",
  },
  {
    title: "🚧 Sepolia",
    baseUrl: "https://sepolia.etherscan.io/address/",
  },
  {
    title: "🚧 Mumbai",
    baseUrl: "https://mumbai.polygonscan.com/address/",
  },
];
