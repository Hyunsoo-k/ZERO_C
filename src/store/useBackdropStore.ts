import { create } from "zustand";

type BackdropStroe = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useBackdropStore = create<BackdropStroe>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}));