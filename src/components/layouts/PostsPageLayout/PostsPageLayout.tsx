"use client";

import { Post } from "@/types/post";
import { useIdStore } from "@/store/useIdStore";
import { useGetPosts } from "@/hooks/useGetPosts";
import { useGetCompany } from "@/hooks/useGetCompany";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { IconButton } from "@/components/ui/buttons/IconButton/IconButton";
import { PostCard } from "@/components/cards/PostCard/PostCard";

import styles from "./PostPageLayout.module.scss";

export const PostsPageLayout = () => {
  const { id } = useIdStore();
  const { data: posts } = useGetPosts(id);
  const { data: company } = useGetCompany(id);
  
  if (!posts || !company) {
    return <LoadingSpinner />
  }
  return (
    <div className={styles.postsPageLayout}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          게시글 목록
          <span className={styles.name}>(회사명: {company.name})</span>
        </h2>
        <p className={styles.description}>탄소 배출 분석글</p>
      </header>
      <section className={styles.postsSection}>
        <ul className={styles.list}>
          {posts.map((post: Post) => (
            <li key={post.id} className={styles.item}>
              <PostCard key={post.id} post={post}/>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};