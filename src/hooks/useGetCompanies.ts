import { useQuery } from "@tanstack/react-query"

import { getCompanies } from "@/lib/api/getCompanies";
import { queryKeys } from "@/queryKeys/queryKeys";

export const useGetCompanies = () => {
  return useQuery({
    queryKey: queryKeys.companies,
    queryFn: getCompanies
  });
};