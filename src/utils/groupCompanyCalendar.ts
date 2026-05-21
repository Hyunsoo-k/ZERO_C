import type { Company } from "@/types/company";

export const groupCompanyCalendar = (company: Company) => {
  const years = [...new Set(company.emissions.map(e => e.yearMonth.split('-')[0]))].sort();

  return years.map(year => ({
    year,
    months: [
      ...new Set(
        company.emissions
          .filter(e => e.yearMonth.startsWith(year))
          .map(e => e.yearMonth.split('-')[1])
      )
    ].sort()
  }));
};
