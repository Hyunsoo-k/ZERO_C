import { IoAdd } from "react-icons/io5";

import styles from "./CreateButton.module.scss";

export const CreateButton = () => {
  return (
    <button type="button" className={styles.createButton}>
      <IoAdd className={styles.icon} />기록 추가
    </button>
  );
};