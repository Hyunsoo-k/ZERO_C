"use client";

import { useState } from "react";

import { useGetCompanies } from "@/hooks/useGetCompanies";
import { useCompanyDateStore } from "@/store/useCompanyDateStore";
import { SearchButton } from "@/components/ui/SearchButton/SearchButton";
import { TrendCard } from "@/components/cards/TrendCard/TrendCard";
import { TotalEmissionsChart } from "@/components/charts/TotalEmissionsChart/TotalEmissionsChart";
import { EmissionsByResourceChart } from "@/components/charts/EmissionsByResourceChart/EmissionsByResourceChart";

import styles from "./HomeLayout.module.scss";

export const HomeLayout = () => {
  const { data: company } = useGetCompanies();
  const [name, setName] = useState<string | null>(company?.[0].name || null);
  const { companyDate } = useCompanyDateStore();
  
  console.log(companyDate);

  if (!company) {
    return null;
  }

  return (
    <div className={styles.homeLayout}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          배출 현황
          <span className={styles.name}>(회사명: {name})</span>
        </h2>
        <p className={styles.description}>기업별 월별 탄소 배출 분석</p>
        <SearchButton />
      </header>
      <section className={styles.cardSecion}>
        <TrendCard subject="currentMonthTotal" />
        <TrendCard subject="monthDiff" />
        <TrendCard subject="evaluation" />
      </section>
      <section className={styles.chartSection}>
        <TotalEmissionsChart emissions={company[0].emissions} />
        <EmissionsByResourceChart emissions={company[0].emissions} />
      </section>
    </div>
  );
};