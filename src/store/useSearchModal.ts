import { create } from "zustand";

import { useBackdropStore } from "./useBackdropStore";

type SearchModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useSearchModalStore = create<SearchModalStore>((set) => ({
  isOpen: false,
  open: () => {
    useBackdropStore.getState().open(() => set({ isOpen: false }));
    set({ isOpen: true });
  },
  close: () => {
    useBackdropStore.getState().close();
    set({ isOpen: false });
  }
}));
