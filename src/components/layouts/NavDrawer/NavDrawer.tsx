"use client";

import Link from "next/link";

import { useNavDrawerStore } from "@/store/useNavDrawerStore";
import { Logo } from "@/components/ui/Logo/Logo";
import { MenuList } from "./components/MenuList/MenuList";

import styles from "./NavDrawer.module.scss";

export const NavDrawer = () => {
  const { isOpen } = useNavDrawerStore();
  
  return (
    <nav className={`${styles.navDrawer} ${isOpen ? styles.open : styles.close}`}>
      <header className={styles.header}>
        <div className={styles.logoWrapper}><Logo /></div>
        <Link href="/"><h1 className={styles.brand}>ZERO_C</h1></Link>
      </header>
      <div className={styles.body}>
        <MenuList />
      </div>
    </nav>
  );
};