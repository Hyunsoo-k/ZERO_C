import { IoAdd } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import styles from "./IconButton.module.scss";

type Props = {
  content: string;
  iconType: "search" | "add";
  onClick: () => void;
};

export const IconButton = ({ content, iconType, onClick }: Props) => {
  const IconComponent = iconType === "search" ? CiSearch : IoAdd;

  return (
    <button type="button" onClick={onClick} className={styles.iconButton}>
      <IconComponent className={styles.icon} />
      {content}
    </button>
  );
};