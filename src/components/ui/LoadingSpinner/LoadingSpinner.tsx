import { BarLoader } from "react-spinners";

import styles from "./LoadingSpinner.module.scss";

const SPINNER_COLOR = "#25935F";

export const LoadingSpinner = () => {
  return (
    <div className={styles.loadingSpinner}>
      <BarLoader
        color={SPINNER_COLOR}
        cssOverride={{
          width: "80%",
          maxWidth: "350px",
          borderRadius: "16px",
        }}
      />
    </div>
  );
};