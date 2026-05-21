import { useIdStore } from "@/store/useId";
import { useGetPosts } from "@/hooks/useGetPosts";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";

import styles from "./PostPageLayout.module.scss";

export const PostsPageLayout = () => {
  const { id } = useIdStore();
  const { data: posts } = useGetPosts(id);
  
  if (!posts) {
    return <LoadingSpinner />
  }

  return (
    <div className={styles.PostsPageLayout}>
      <header className={styles.header}>
        <h2 className={styles.title}></h2>
      </header>
      <ul className={styles.list}>

      </ul>
    </div>
  );
};