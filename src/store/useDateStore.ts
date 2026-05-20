import { create } from "zustand";

const INITIAL_DATE = {
  year: "2026",
  month: "05"
};

type DateStore = {
  date: { year: string, month: string };
  setDate: (date: { year: string, month: string }) => void;
};

export const useDateStore = create<DateStore>((set) => ({
  date: { year: INITIAL_DATE.year, month: INITIAL_DATE.month },
  setDate: (date: { year: string, month: string }) => set({ date })
}));