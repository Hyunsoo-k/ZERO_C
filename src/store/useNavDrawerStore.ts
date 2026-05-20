import { create } from "zustand";

import { useBackdropStore } from "./useBackdropStore";

type NavDrawerStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useNavDrawerStore = create<NavDrawerStore>((set) => ({
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