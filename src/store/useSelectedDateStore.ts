import { create } from "zustand";

const INITIAL_SECLECTED_DATE = {
  year: "2026",
  month: "05"
};

type SelectedDateStore = {
  selectedDate: { year: string, month: string };
  setSelectedDate: (date: { year: string, month: string }) => void;
};

export const useSelectedDateStore = create<SelectedDateStore>((set) => ({
  selectedDate: { year: INITIAL_SECLECTED_DATE.year, month: INITIAL_SECLECTED_DATE.month },
  setSelectedDate: (date: { year: string, month: string }) => set({
    selectedDate: date
  })
}));