"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

import { processCalendar } from "@/utils/processCalendar";
import { useSearchYearMonthModalStore } from "@/store/useSearchYearMonthModalStore";
import { useDateStore } from "@/store/useDateStore";
import { useIdStore } from "@/store/useIdStore";
import { useGetCompany } from "@/hooks/useGetCompany";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { SubmitButton } from "@/components/ui/SubmitButton/SubmitButton";

import styles from "./SearchYearMonthModal.module.scss";

export const SearchYearMonthModal = () => {
  const { isOpen, close } = useSearchYearMonthModalStore();
  const { setDate } = useDateStore();
  const { id, setId } = useIdStore();
  const { data: company } = useGetCompany(id);
  const [year, setYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);

  const calendar = company ? processCalendar(company) : []
  const years = calendar.map((calendar: { year: string, months: string[]}) => calendar.year);
  const months = calendar.find((calendar: { year: string, months: string[] }) => 
    calendar.year === year
  )?.months ?? [];

  const handleSubmit = () => {
    if (year && month) {
      setDate({ year, month });

      if (company) {
        setId(company.id);
      }
      
      close();
    }
  };

  if(!isOpen || !company) {
    return null;
  }

  return createPortal(
    <div className={styles.searchYearMonthModal}>
      <header className={styles.header}>
        <h3 className={styles.title}>연,월 배출량 조회</h3>
        <small className={styles.description}>조회할 연,월을 선택해 주세요.</small>
      </header>
      <div className={styles.body}>
        <Dropdown
          target="year"
          items={years}
          disabled={!company}
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