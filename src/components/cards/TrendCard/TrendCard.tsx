import { CiFaceSmile } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";


import styles from "./TrendCard.module.scss";

const SUBJECT_MAP = {
  "currentMonthTotal": "해당 달 총 배출량",
  "monthDiff": "전월 대비",
  "evaluation": "해당 달 평가"
};

type Props = {
  subject: "currentMonthTotal" | "monthDiff" | "evaluation";
};

export const TrendCard = ({ subject }: Props) => {
  return (
    <article className={`${styles.trendCard} ${subject === "evaluation" ? styles.evaluation : ""}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>{SUBJECT_MAP[subject]}</h3>
      </header>
      <strong className={styles.value}>
        {subject === "currentMonthTotal" ? (
          <> 1,061 <span className={styles.unit}>tCO₂e</span> </>
        ) : subject === "monthDiff" ? (
          <>-3.9%</>
        ) : (
          <>좋음</>
        )}
        {subject === "evaluation" && <CiFaceSmile className={styles.icon} />}
      </strong>
    </article>
  );
};