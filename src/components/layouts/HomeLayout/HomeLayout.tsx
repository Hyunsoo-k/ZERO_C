"use client";

import { useGetCompany } from "@/hooks/useGetCompany";
import { useIdStore } from "@/store/useIdStore";
import { useSearchYearMonthModalStore } from "@/store/useSearchYearMonthModalStore";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { IconButton } from "@/components/ui/buttons/IconButton/IconButton";
import { TrendCard } from "@/components/cards/TrendCard/TrendCard";
import { MonthlyTotalEmissionsChart } from "@/components/charts/TotalEmissionsChart/MonthlyTotalEmissionsChart";
import { MonthlyEmissionsBySourceChart } from "@/components/charts/MonthlyEmissionsBySourceChart/MonthlyEmissionsBySourceChart";

import styles from "./HomeLayout.module.scss";
import { SearchYearMonthModal } from "@/components/modals/SearchYearMonthModal/SearchYearMonthModal";

export const HomeLayout = () => {
  const { id } = useIdStore();
  const { data: company } = useGetCompany(id);
  const { open: openSearchModal } = useSearchYearMonthModalStore();

  if (!company) {
    return <LoadingSpinner />
  }

  const handleSearchClick = () => {
    openSearchModal();
  };

  return (
    <div className={styles.homeLayout}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          배출 현황
          <span className={styles.name}>(회사명: {company.name})</span>
        </h2>
        <p className={styles.description}>월별 탄소 배출 분석</p>
        <SearchYearMonthModal />
        <IconButton content="검색" iconType="search" onClick={handleSearchClick} />
      </header>
      <section className={styles.cardSecion}>
        <TrendCard subject="totalMonthlyEmissions" company={company} />
        <TrendCard subject="monthDiff" company={company} />
        <TrendCard subject="evaluation" company={company} />
      </section>
      <section className={styles.chartSection}>
        <MonthlyTotalEmissionsChart emissions={company.emissions} />
        <MonthlyEmissionsBySourceChart emissions={company.emissions} />
      </section>
    </div>
  );
};