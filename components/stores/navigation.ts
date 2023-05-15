import { create } from "zustand";
import { DarkModeButton } from "../buttons";
import { NetworkStats, NetworkStaked } from "../content";

export interface INavigationTab {
  index: number;
  icon: string;
  Content: () => JSX.Element;
}

export const navigationTabs: Record<string, INavigationTab> = {
  "Network Stats": {
    index: 0,
    icon: "💚",
    Content: NetworkStats,
  },
  Staking: {
    index: 1,
    icon: "🔥",
    Content: NetworkStaked,
  },
  // Dashboards: {
  //   index: 2,
  //   icon: "📗",
  //   Content: DarkModeButton,
  // },
  // "Developer Tools": {
  //   index: 3,
  //   icon: "🚧",
  //   Content: DarkModeButton,
  // },
  // Favorites: {
  //   index: 4,
  //   icon: "🌟",
  //   Content: DarkModeButton,
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
