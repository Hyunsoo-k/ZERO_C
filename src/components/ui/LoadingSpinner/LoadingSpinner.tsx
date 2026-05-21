import { GridLoader } from "react-spinners";

import styles from "./LoadingSpinner.module.scss";

const SPINNER_COLOR = "#25935F";

export const LoadingSpinner = () => {
  return (
    <div className={styles.loadingSpinner}>
      <GridLoader color={SPINNER_COLOR} size={30} />
    </div>
  );
};