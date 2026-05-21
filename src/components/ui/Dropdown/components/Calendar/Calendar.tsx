import styles from "./Calendar.module.scss";

const ALL_MONTHS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

type Props = {
  items: string[] | undefined;
  onSelect: (value: string) => void;
};

export const Calendar = ({ items, onSelect }: Props) => {
  return (
    <div className={styles.calendar}>
      {ALL_MONTHS.map((item) => {
        const hasData = items ? items.includes(item) : false;

        return (
          <button
            key={item}
            type="button"
            disabled={!hasData}
            onClick={() => onSelect(item)}
            className={`${styles.cell} ${hasData ? styles.hasData : ""}`}
          >
            {`${parseInt(item, 10)}월`}
          </button>
        );
      })}
    </div>
  );
};