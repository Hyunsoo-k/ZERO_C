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
    const { open: openBackdrop } = useBackdropStore.getState();
    openBackdrop();
    set({ isOpen: true });
  },
  close: () => {
    const { close: closeBackdrop } = useBackdropStore.getState();
    closeBackdrop();
    set({ isOpen: false });
  }
}));