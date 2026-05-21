"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { Calendar } from "./components/Calendar/Calendar";

import styles from "./Dropdown.module.scss";

const TARGET_MAP = {
  "name": "회사명",
  "year": "연도",
  "month": "월"
};

type Props = {
  target: "name" | "year" | "month";
  items: string[] | undefined;
  disabled: boolean;
  onSelect: (value: string) => void;
};

export const Dropdown = ({ target, items, disabled, onSelect }: Props) => {
  const [selected, setSelected] = useState<string>(TARGET_MAP[target]);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dropdownEle = dropdownRef.current;
    if (!dropdownEle) {
      return;
    }

    const handleOutstideClick = (e: MouseEvent) => {
      if (e.target instanceof Node && !dropdownEle.contains(e.target)) {
        setIsListOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutstideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutstideClick);
    }
  }, [])

  const toggleList = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsListOpen((prev) => !prev);
  };

  const handleOptionSelect = (e: ReactMouseEvent<HTMLButtonElement>, item: string) => {
    e.stopPropagation();
    setSelected(item);
    setIsListOpen(false);
    onSelect(item);
  };

  return (
    <div ref={dropdownRef} className={`${styles.dropdown} ${target === "name" ? styles.name : ""}`}>
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
          items?.map((item: string) => (
            <li key={item} className={styles.item}>
              <button
                type="button"
                onClick={(e) => handleOptionSelect(e, item)}
                className={styles.option}
              >
                {item}
              </button>
            </li>
          ))
        }
        {(target === "month" && isListOpen) && (
          <Calendar
            items={items}
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