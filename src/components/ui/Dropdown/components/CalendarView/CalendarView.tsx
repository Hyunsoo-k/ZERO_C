import styles from "./CalendarView.module.scss";

const ALL_MONTHS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

type Props = {
  list: string[] | undefined;
  onSelect: (value: string) => void;
};

export const CalendarView = ({ list, onSelect }: Props) => {
  return (
    <div className={styles.calendarView}>
      {ALL_MONTHS.map((item) => {
        const hasData = list ? list.includes(item) : false;

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