import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

import { CreateButton } from "@/components/ui/CreateButton/CreateButton";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <CiMenuBurger className={styles.burger} />
      <Link href="/"><h1 className={styles.brand}>ZERO_C</h1></Link>
      <CreateButton />
    </header>
  );
};