import { CiFaceSmile } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";

import { calcMonthDiff } from "@/utils/calcMonthDiff";
import { calcEvaluation } from "@/utils/calcEvaluation";
import { processMonthlyEmissions } from "@/utils/processMonthlyEmissions";
import { useSelectedCompanyStore } from "@/store/useSelectedCompanyStore";
import { useSelectedDateStore } from "@/store/useSelectedDateStore";

import styles from "./TrendCard.module.scss";

const SUBJECT_MAP = {
  "totalMonthlyEmissions": "해당 달 총 배출량",
  "monthDiff": "전월 대비",
  "evaluation": "해당 달 평가"
};

const EVALUATION_MAP = {
  "good": "좋아요",
  "normal": "보통이에요",
  "bad": "좋지 않아요"
};

const ICON_MAP = {
  good: <CiFaceSmile className={styles.icon} style={{ color: "#2EB877" }} />,
  normal: <CiFaceMeh className={styles.icon} style={{ color: "#D5E21C" }} />,
  bad: <CiFaceFrown className={styles.icon} style={{ color: "#D80707" }} />,
};

type Props = {
  subject: "totalMonthlyEmissions" | "monthDiff" | "evaluation";
};

export const TrendCard = ({ subject }: Props) => {
  const { selectedCompany } = useSelectedCompanyStore();
  const { selectedDate } = useSelectedDateStore();
  const monthlyEmissions = processMonthlyEmissions(selectedCompany.emissions);
  const totalEmissions = monthlyEmissions.find((item) => item.month === selectedDate.month)?.totalEmissions;
  const monthDiff = calcMonthDiff(monthlyEmissions, selectedDate.month);
  const evaluation = calcEvaluation(monthDiff);

  return (
    <article className={`${styles.trendCard} ${subject === "evaluation" ? styles.evaluation : ""}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>{SUBJECT_MAP[subject]}</h3>
      </header>
      <strong className={styles.value}>
        {subject === "totalMonthlyEmissions" ? (
          <>{totalEmissions}<span className={styles.unit}>tCO₂e</span></>
        ) : subject === "monthDiff" ? (
          <>{monthDiff}</>
        ) : (
          <>{evaluation && EVALUATION_MAP[evaluation]}</>
        )}
        {subject === "evaluation" && evaluation && ICON_MAP[evaluation]}
      </strong>
    </article>
  );
};