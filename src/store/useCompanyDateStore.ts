import { create } from "zustand";

type CompanyDateStore = {
  companyDate: { name: string | null, year: string | null, month: string | null } | null;
  setCompanyDate: (companyDate: { name: string | null, year: string | null, month: string | null }) => void;
  resetCompanyDate: () => void;
};

export const useCompanyDateStore = create<CompanyDateStore>((set) => ({
  companyDate: null,
  setCompanyDate: (companyDate) => set({ companyDate }),
  resetCompanyDate: () => set( { companyDate: null })
}));