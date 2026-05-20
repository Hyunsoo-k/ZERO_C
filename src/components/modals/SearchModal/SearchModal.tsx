"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

import { Company } from "@/lib/types";
import { groupCompanyCalendar } from "@/utils/groupCompanyCalendar";
import { useSearchModalStore } from "@/store/useSearchModal";
import { useCompanyDateStore } from "@/store/useCompanyDateStore";
import { useGetCompanies } from "@/hooks/useGetCompanies";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { SubmitButton } from "@/components/ui/SubmitButton/SubmitButton";

import styles from "./SearchModal.module.scss";

export const SearchModal = () => {
  const { isOpen, close } = useSearchModalStore();
  const { data: companies } = useGetCompanies();
  const { setCompanyDate } = useCompanyDateStore();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const companyNames = companies?.map((company: Company) => company.name) || [];

  const selectedCompanyData = selectedCompany 
    ? companies?.find((company: Company) => company.name === selectedCompany)
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
    setCompanyDate({ name: selectedCompany, year: selectedYear, month: selectedMonth });
  };

  if(!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.searchModal}>
      <header className={styles.header}>
        <h3 className={styles.title}>배출량 조회</h3>
        <small className={styles.description}>조회할 회사와 연월을 선택해 주세요.</small>
      </header>
      <div className={styles.body}>
        <Dropdown
          data={{ target: "name", list: companyNames }}
          disabled={!companies}
          onSelect={(value) => {
            setSelectedCompany(value);
            setSelectedYear(null);
            setSelectedMonth(null);
          }}
        />
        <Dropdown
          data={{ target: "year", list: years }}
          disabled={!selectedCompany}
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