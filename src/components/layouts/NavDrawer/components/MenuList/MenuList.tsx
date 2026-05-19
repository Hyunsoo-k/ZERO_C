import Link from "next/link";

import { MENUS } from "@/consts/menus";
import { Category } from "@/types/category";
import { useCategoriesStore } from "@/store/useCategoriesStore";

import styles from "./MenuList.module.scss";

export const MenuList = () => {
  const { setCurrent: setCurrentSection } = useCategoriesStore();

  const handleItemClick = (category: Category) => {
    setCurrentSection(category);
  };

  return (
    <ul className={styles.menuList}>
      {MENUS.map((item) => (
        <li key={item.name} className={styles.item}>
          <Link
            href={`/${item.category}`}
            onClick={() => handleItemClick(item.category)}
            className={styles.option}
          >
            <item.icon className={styles.icon} />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};