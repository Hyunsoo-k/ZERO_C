import { Post } from "@/types/post";

import { usePostDetailStore } from "@/store/usePostDetailStore";

import styles from "./PostCard.module.scss";
import { Button } from "@/components/ui/buttons/Button/Button";

type Props = {
  post: Post
};

export const PostCard = ({ post }: Props) => {
  const { open: openPostDetail } = usePostDetailStore();
  const { title, content, dateTime } = post;

  const handleButtonClick = () => {
    openPostDetail(post, "viewer");
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
        <Button content="열기" onClick={handleButtonClick} />
      </footer>
    </article>
  );
};