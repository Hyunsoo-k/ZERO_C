"use client";

import { useSelectedCompanyStore } from "@/store/useSelectedCompanyStore";
import { useGetCompanies } from "@/hooks/useGetCompanies";
import { SearchButton } from "@/components/ui/SearchButton/SearchButton";
import { TrendCard } from "@/components/cards/TrendCard/TrendCard";
import { MonthlyTotalEmissionsChart } from "@/components/charts/TotalEmissionsChart/MonthlyTotalEmissionsChart";
import { MonthlyEmissionsBySourceChart } from "@/components/charts/MonthlyEmissionsBySourceChart/MonthlyEmissionsBySourceChart";

import styles from "./HomeLayout.module.scss";

export const HomeLayout = () => {
  const { data: company } = useGetCompanies();
  const { selectedCompany } = useSelectedCompanyStore();

  if (!company) {
    return null;
  }

  return (
    <div className={styles.homeLayout}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          배출 현황
          <span className={styles.name}>(회사명: {selectedCompany.name})</span>
        </h2>
        <p className={styles.description}>기업별 월별 탄소 배출 분석</p>
        <SearchButton />
      </header>
      <section className={styles.cardSecion}>
        <TrendCard subject="totalMonthlyEmissions" />
        <TrendCard subject="monthDiff" />
        <TrendCard subject="evaluation" />
      </section>
      <section className={styles.chartSection}>
        <MonthlyTotalEmissionsChart emissions={selectedCompany.emissions} />
        <MonthlyEmissionsBySourceChart emissions={selectedCompany.emissions} />
      </section>
    </div>
  );
};