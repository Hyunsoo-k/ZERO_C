import { create } from "zustand";

type IdStore = {
  id: string;
  setId: (id: string) => void;
};

export const useIdStore = create<IdStore>((set) => ({
  id: "c1",
  setId: (id: string) => set({ id })
}));