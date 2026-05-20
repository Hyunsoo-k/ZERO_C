"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

import { Company } from "@/types/company";
import { groupCompanyCalendar } from "@/utils/groupCompanyCalendar";
import { useSearchModalStore } from "@/store/useSearchModal";
import { useGetCompanies } from "@/hooks/useGetCompanies";
import { useGetCompany } from "@/hooks/useGetCompany";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { SubmitButton } from "@/components/ui/SubmitButton/SubmitButton";

import styles from "./SearchModal.module.scss";

export const SearchModal = () => {
  const { isOpen, close } = useSearchModalStore();
  const { data: companies } = useGetCompanies();
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);

  useGetCompany(id);

  const companyNames = companies?.map((company: Company) => company.name) || [];

  const selectedCompanyData = name 
    ? companies?.find((company: Company) => company.name === name)
    : null;

  const compayCalender = selectedCompanyData 
    ? groupCompanyCalendar(selectedCompanyData)
    : []

  const years = compayCalender.map((calendar: { year: string, months: string[]}) => calendar.year);
  const months = compayCalender.find((calendar: { year: string, months: string[] }) => 
    calendar.year === year
  )?.months ?? [];

  const handleSubmit = () => {
    close();
    setId(companies.find((company: Company) => company.name === name).id);
  };

  if(!isOpen || !companies) {
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
            setName(value);
            setYear(null);
            setMonth(null);
          }}
        />
        <Dropdown
          data={{ target: "year", list: years }}
          disabled={!name}
          onSelect={setYear}
        />
        <Dropdown
          data={{ target: "month", list: months }}
          disabled={!year}
          onSelect={setMonth}
        />
      </div>
      <footer className={styles.footer}>
        <SubmitButton onClick={handleSubmit} disabled={!month} />
      </footer>
    </div>,
    document.body
  );
};