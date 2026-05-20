import styles from "./SubmitButton.module.scss";

type Props = {
  onClick: () => void;
  disabled: boolean;
};

export const SubmitButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={styles["submitButton"]}
    >
      확인
    </button>
  );
};