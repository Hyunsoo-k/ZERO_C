import { QueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/queryKeys/queryKeys";
import { PostsPageLayout } from "@/components/layouts/PostsPageLayout/PostsPageLayout";

import styles from "./page.module.scss";

export default async function PostsPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    }
  });

  await queryClient.prefetchQuery({ queryKey: queryKeys.posts("c1") });

  return (
    <main className={styles.page}>
      <PostsPageLayout />
    </main>
  );
}