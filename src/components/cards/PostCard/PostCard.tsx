import styles from "./PostCard.module.scss";

export const PostCard = () => {
  return (
    <article className={styles.postCard}>
      <header className={styles.header}>
        <h3 className={styles.title}></h3>
      </header>
      <div className={styles.body}></div>
      <footer className={styles.footer}>
        
      </footer>
    </article>
  );
};