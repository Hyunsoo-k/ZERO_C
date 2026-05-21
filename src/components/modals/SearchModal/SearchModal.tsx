"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

import { Company } from "@/types/company";
import { processCalendar } from "@/utils/processCalendar";
import { useSearchModalStore } from "@/store/useSearchModal";
import { useDateStore } from "@/store/useDateStore";
import { useIdStore } from "@/store/useId";
import { useGetCompanies } from "@/hooks/useGetCompanies";
import { useGetCompany } from "@/hooks/useGetCompany";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { SubmitButton } from "@/components/ui/SubmitButton/SubmitButton";

import styles from "./SearchModal.module.scss";

export const SearchModal = () => {
  const { isOpen, close } = useSearchModalStore();
  const { setDate } = useDateStore();
  const { id, setId } = useIdStore();
  const { data: companies } = useGetCompanies();
  useGetCompany(id);
  const [name, setName] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);

  const names = companies?.map((company: Company) => company.name) || [];
  const date = name
    ? companies?.find((company: Company) => company.name === name)
    : null;
  const calendar = date ? processCalendar(date) : []
  const years = calendar.map((calendar: { year: string, months: string[]}) => calendar.year);
  const months = calendar.find((calendar: { year: string, months: string[] }) => 
    calendar.year === year
  )?.months ?? [];

  const handleNameSelect = (name: string) => {
    setName(name);
    setYear(null);
    setMonth(null);
  };

  const handleSubmit = () => {
    if (year && month) {
      setDate({ year, month });

      if (companies) {
        setId(companies.find((company: Company) => company.name === name).id ?? null);
      }
      
      close();
    }
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
          target="name"
          items={names}
          disabled={!companies}
          onSelect={handleNameSelect}
        />
        <Dropdown
          target="year"
          items={years}
          disabled={!name}
          onSelect={setYear}
        />
        <Dropdown
          target="month"
          items={months}
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