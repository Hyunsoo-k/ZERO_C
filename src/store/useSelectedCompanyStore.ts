import { create } from "zustand";

import type { Company } from "@/types/company";
import { companies } from "@/lib/mockData";

const INITIAL_COMPANY = companies[0]; 

type SelectedCompanyStore = {
  selectedCompany: Company
  setSelectedCompany: (company: Company) => void;
};

export const useSelectedCompanyStore = create<SelectedCompanyStore>((set) => ({
  selectedCompany: {
    id: INITIAL_COMPANY.id,
    name: INITIAL_COMPANY.name,
    country: INITIAL_COMPANY.country,
    emissions: INITIAL_COMPANY.emissions
  },
  setSelectedCompany: (company: Company) => set({ selectedCompany: company })
}));