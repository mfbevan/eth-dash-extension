import { create } from "zustand";
import { StorageService } from "../services";

export interface INavigationStore {
  page: number;
  setPage: (page: number) => void;
}

/**
 * This store is used to keep track of the current status of the minting workflow form
 */
export const useNavigationStore = create<INavigationStore>((set) => ({
  page: 0,
  setPage: (page: number) => {
    StorageService.setItem("page", page.toString());
    return set({ page });
  },
}));
