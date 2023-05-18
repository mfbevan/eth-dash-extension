import { create } from "zustand";

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
