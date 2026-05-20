import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { fetchCompanies } from "@/lib/api";
import { HomeLayout } from "@/components/layouts/HomeLayout/HomeLayout";

import styles from "./page.module.scss";

export default async function Home() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({ queryKey: ["companies"], queryFn: fetchCompanies });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeLayout />
        </HydrationBoundary>
      </main>
    </div>
  );
}
