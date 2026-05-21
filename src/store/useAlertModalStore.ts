import { create } from "zustand";

import { useBackdropStore } from "./useBackdropStore";

type AlertModalStore = {
  isOpen: boolean
  message: string | null;
  onClick: () => void;
  open: (message: string, onClick: () => void) => void;
  close: () => void;
};

export const useAlertModalStore = create<AlertModalStore>((set) => ({
  isOpen: false,
  message: null,
  onClick: () => {},
  open: (message, onClick) => {
    useBackdropStore.getState().open(() => set({ isOpen: false }));
    set({ isOpen: true, message, onClick });
  },
  close: () => {
    useBackdropStore.getState().close();
    set({ isOpen: false, message: null, onClick: () => {} });
  }
}));