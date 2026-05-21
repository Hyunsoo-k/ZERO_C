import styles from "./Button.module.scss";

type Props = {
  content: string;
  onClick: () => void;
};

export const Button = ({ content, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {content}
    </button>
  );
};