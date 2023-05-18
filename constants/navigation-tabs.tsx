import { ReactNode } from "react";
import {
  FcBinoculars,
  FcBookmark,
  FcComboChart,
  FcLock,
  FcQuestions,
  FcSettings,
} from "react-icons/fc";
import {
  NetworkStats,
  NetworkStaked,
  Bookmarks,
  Information,
  Favourites,
  Settings,
} from "../components/content";

export interface INavigationTab {
  index: number;
  icon: ReactNode;
  Content: () => JSX.Element;
  description?: string;
  link?: string;
}

export const navigationTabs: Record<string, INavigationTab> = {
  "Network Stats": {
    index: 0,
    icon: <FcComboChart />,
    Content: NetworkStats,
    description: "Powered by Etherscan",
    link: "https://etherscan.io/",
  },
  "Staking & Withdrawals": {
    index: 1,
    icon: <FcLock />,
    Content: NetworkStaked,
    description: "Powered by Beaconcha.in",
    link: "https://beaconcha.in/",
  },
  "Ethereum Dashboards": {
    index: 2,
    icon: <FcBookmark />,
    Content: Bookmarks,
    description: "Powered by ethdash.xyz",
    link: "https://ethdash.xyz/",
  },
  "Wallet Tracker": {
    index: 3,
    icon: <FcBinoculars />,
    Content: Favourites,
    description: "Track your favourite Ethereum wallets",
  },
  Information: {
    index: 4,
    icon: <FcQuestions />,
    Content: Information,
    description: "Made by mfbevan.eth",
    link: "https://twitter.com/mfbevan",
  },
  Settings: {
    index: 5,
    icon: <FcSettings />,
    Content: Settings,
    description: "Personalise your experience",
  },
};
