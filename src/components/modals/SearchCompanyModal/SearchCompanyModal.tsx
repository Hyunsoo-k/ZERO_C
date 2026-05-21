"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

import { Company } from "@/types/company";
import { useSearchCompanyModalStore } from "@/store/useSearchCompanyModalStore";
import { useIdStore } from "@/store/useIdStore";
import { useGetCompanies } from "@/hooks/useGetCompanies";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { SubmitButton } from "@/components/ui/SubmitButton/SubmitButton";

import styles from "./SearchCompanyModal.module.scss";

export const SearchCompanyModal = () => {
  const { isOpen, close } = useSearchCompanyModalStore();
  const { data: companies } = useGetCompanies();
  const [name, setName] = useState<string | null>(null);
  const { setId }= useIdStore();

  const names = companies?.map((company: Company) => company.name) || [];

  const handleNameSelect = (name: string) => {
    setName(name);

  };

  const handleSubmit = () => {
    if (!name || !companies) {
      return;
    }

    const found = companies.find((company: Company) => company.name === name);
    if (!found || !found.id) {
      return;
    }
    setId(found.id);
    close();
  }
  
  if(!isOpen || !companies) {
    return null;
  }

  return createPortal(
    <div className={styles.searchCompanyModal}>
      <header className={styles.header}>
        <h3 className={styles.title}>회사 조회</h3>
        <small className={styles.description}>조회할 회사를 선택해 주세요.</small>
      </header>
      <div className={styles.body}>
        <Dropdown
          target="name"
          items={names}
          disabled={!companies}
          onSelect={handleNameSelect}
        />
      </div>
      <footer className={styles.footer}>
        <SubmitButton onClick={handleSubmit} disabled={!names} />
      </footer>
    </div>,
    document.body
  );
}