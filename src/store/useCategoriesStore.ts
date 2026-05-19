import { create } from "zustand";

import type { Category } from "@/types/category";

type SectionStore = {
  current: string;
  setCurrent: (category: Category) => void;
};

export const useCategoriesStore = create<SectionStore>((set) => ({
  current: "home",
  setCurrent: (category) => set({ current: category })
}));