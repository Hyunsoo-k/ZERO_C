import { PostsPageLayout } from "@/components/layouts/PostsPageLayout/PostsPageLayout";

import styles from "./page.module.scss";

export default async function PostsPage() {
  
  return (
    <div className={styles.page}>
      <PostsPageLayout />
    </div>
  );
}