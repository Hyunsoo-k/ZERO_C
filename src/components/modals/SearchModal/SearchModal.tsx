"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

import { Company } from "@/types/company";
import { groupCompanyCalendar } from "@/utils/groupCompanyCalendar";
import { useSearchModalStore } from "@/store/useSearchModal";
import { useCompanyDateStore } from "@/store/useCompanyDateStore";
import { useSelectedCompanyStore } from "@/store/useSelectedCompanyStore";
import { useGetCompanies } from "@/hooks/useGetCompanies";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { SubmitButton } from "@/components/ui/SubmitButton/SubmitButton";

import styles from "./SearchModal.module.scss";

export const SearchModal = () => {
  const { isOpen, close } = useSearchModalStore();
  const { data: companies } = useGetCompanies();
  const { setSelectedCompany } = useSelectedCompanyStore();
  const { setCompanyDate } = useCompanyDateStore();
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const companyNames = companies?.map((company: Company) => company.name) || [];

  const selectedCompanyData = selectedName 
    ? companies?.find((company: Company) => company.name === selectedName)
    : null;

  const compayCalender = selectedCompanyData 
    ? groupCompanyCalendar(selectedCompanyData)
    : []

  const years = compayCalender.map((calendar: { year: string, months: string[]}) => calendar.year);
  const months = compayCalender.find((calendar: { year: string, months: string[] }) => 
    calendar.year === selectedYear
  )?.months ?? [];

  const handleSubmit = () => {
  close();
  setSelectedCompany(companies?.find((company: Company) => company.name === selectedName) ?? null);
  setCompanyDate({ name: selectedName, year: selectedYear, month: selectedMonth });
};

  if(!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.searchModal}>
      <header className={styles.header}>
        <h3 className={styles.title}>배출 현황 조회</h3>
        <small className={styles.description}>조회할 회사와 연,월을 선택해 주세요.</small>
      </header>
      <div className={styles.body}>
        <Dropdown
          data={{ target: "name", list: companyNames }}
          disabled={!companies}
          onSelect={(value) => {
            setSelectedName(value);
            setSelectedYear(null);
            setSelectedMonth(null);
          }}
        />
        <Dropdown
          data={{ target: "year", list: years }}
          disabled={!selectedName}
          onSelect={setSelectedYear}
        />
        <Dropdown
          data={{ target: "month", list: months }}
          disabled={!selectedYear}
          onSelect={setSelectedMonth}
        />
      </div>
      <footer className={styles.footer}>
        <SubmitButton onClick={handleSubmit} disabled={!selectedMonth} />
      </footer>
    </div>,
    document.body
  );
};