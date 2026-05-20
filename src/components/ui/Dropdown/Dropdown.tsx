import type { MouseEvent } from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { CalendarView } from "./components/CalendarView/CalendarView";

import styles from "./Dropdown.module.scss";

const TARGET_MAP = {
  "name": "회사명",
  "year": "연도",
  "month": "월"
};

type Props = {
  data: {
    target: "name" | "year" | "month";
    list: string[] | undefined;
  };
  disabled: boolean;
  onSelect: (value: string) => void;
};

export const Dropdown = ({ data, disabled, onSelect }: Props) => {
  const { target, list } = data;
  const [selected, setSelected] = useState<string>(TARGET_MAP[target]);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const toggleList = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsListOpen((prev) => !prev);
  };

  const handleSelectOption = (e: MouseEvent<HTMLButtonElement>, value: string) => {
    e.stopPropagation();
    setSelected(value);
    setIsListOpen(false);
    onSelect(value);
  };

  return (
    <div className={`${styles.dropdown} ${target === "name" ? styles.name : ""}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={toggleList}
        className={styles.selected}
      >
        {selected}
        <IoIosArrowDown className={styles.icon} />
      </button>
      <ul className={`${styles.list} ${isListOpen ? styles.open : ""}`}>
        {((target === "name" || target === "year") && isListOpen) && 
          list?.map((item: string) => (
            <li key={item} className={styles.item}>
              <button
                type="button"
                onClick={(e) => handleSelectOption(e, item)}
                className={styles.option}
              >
                {item}
              </button>
            </li>
          ))
        }
        {(target === "month" && isListOpen) && (
          <CalendarView
            list={list}
            onSelect={(value) => {
              setSelected(value);
              setIsListOpen(false);
              onSelect(value);
            }}
          />
        )}
      </ul>
    </div>
  );
};