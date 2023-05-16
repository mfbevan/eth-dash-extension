import { create } from "zustand";
import {
  NetworkStats,
  NetworkStaked,
  Bookmarks,
  Information,
} from "../components/content";

export interface INavigationTab {
  index: number;
  icon: string;
  Content: () => JSX.Element;
  description?: string;
  link?: string;
}

export const navigationTabs: Record<string, INavigationTab> = {
  "Network Stats": {
    index: 0,
    icon: "💚",
    Content: NetworkStats,
    description: "Powered by Etherscan",
    link: "https://etherscan.io/",
  },
  "Staking & Withdrawals": {
    index: 1,
    icon: "🔥",
    Content: NetworkStaked,
    description: "Powered by Beaconcha.in",
    link: "https://beaconcha.in/",
  },
  "Ethereum Dashboards": {
    index: 2,
    icon: "📚",
    Content: Bookmarks,
    description: "Powered by ethdash.xyz",
    link: "https://ethdash.xyz/",
  },
  Information: {
    index: 3,
    icon: "❔",
    Content: Information,
    description: "Made by mfbevan.eth",
    link: "https://twitter.com/mfbevan",
  },
  // "Developer Tools": {
  //   index: 3,
  //   icon: "🚧",
  //   Content: DarkModeButton,
  // },
  // Favorites: {
  //   index: 4,
  //   icon: "🌟",
  //   Content: Favourites,
  // },
  // Settings: {
  //   index: 5,
  //   icon: "⚙️",
  //   Content: DarkModeButton,
  // },
};

export interface INavigationStore {
  page: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
}

/**
 * This store is used to keep track of the current status of the minting workflow form
 */
export const useNavigationStore = create<INavigationStore>((set) => ({
  page: 0,
  setPage: (page: number) => set({ page }),
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  previousPage: () => set((state) => ({ page: state.page - 1 })),
}));
