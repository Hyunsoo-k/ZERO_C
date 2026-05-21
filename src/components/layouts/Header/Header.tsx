"use client";

import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

import { useNavDrawerStore } from "@/store/useNavDrawerStore";
import { IconButton } from "@/components/ui/buttons/IconButton/IconButton";

import styles from "./Header.module.scss";

export const Header = () => {
  const { open: openNavDrawer } = useNavDrawerStore();

  const handleBurgerClick = () => {
    openNavDrawer();
  };

  const handleAddButtonClick = () => {

  };

  return (
    <header className={styles["header"]}>
      <button type="button" onClick={handleBurgerClick} className={styles.navDrawerButton}>
        <CiMenuBurger  className={styles.burger} />
      </button>
      <Link href="/"><h1 className={styles.brand}>ZERO_C</h1></Link>
      <IconButton content="기록 추가" iconType="add" onClick={handleAddButtonClick} />
    </header>
  );
};