import { create } from "zustand";

type BackdropStore = {
  isOpen: boolean;
  closeCallback: () => void;
  open: (closeCallback: () => void) => void;
  close: () => void;
};

export const useBackdropStore = create<BackdropStore>((set, get) => ({
  isOpen: false,
  closeCallback: () => {},
  open: (closeCallback: () => void) => {
    set({ isOpen: true, closeCallback });
  },
  close: () => {
    const { closeCallback } = get();
    closeCallback();
    set({ isOpen: false, closeCallback: () => {} });
  }
}));