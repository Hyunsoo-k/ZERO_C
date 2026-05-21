import { Post } from "@/types/post";

import styles from "./PostCard.module.scss";

type Props = {
  post: Post
};

export const PostCard = ({ post }: Props) => {
  const { title, content, dateTime } = post;

  const handleButtonClick = () => {

  };

  return (
    <article className={styles.postCard}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <small className={styles.date}>{dateTime}</small>
      </header>
      <div className={styles.body}>
        <p className={styles.content}>{content}</p>
      </div>
      <footer className={styles.footer}>
        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.openButton}
        >
          열기
        </button>
      </footer>
    </article>
  );
};