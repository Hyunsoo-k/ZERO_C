import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { getCompanies } from "@/lib/api/getCompanies";
import { getCompany } from "@/lib/api/getCompany";
import { queryKeys } from "@/queryKeys/queryKeys";
import { HomeLayout } from "@/components/layouts/HomeLayout/HomeLayout";

import styles from "./page.module.scss";

export default async function Home() {
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

  const companiesQuery = queryClient.prefetchQuery({ 
    queryKey: queryKeys.companies, 
    queryFn: getCompanies 
  });

  const companyQuery = queryClient.prefetchQuery({ 
    queryKey: queryKeys.company("c1"), 
    queryFn: () => getCompany("c1")
  });

  await Promise.all([companiesQuery, companyQuery]);

  return (
    <main className={styles.page}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeLayout />
      </HydrationBoundary>
    </main>
  );
}
