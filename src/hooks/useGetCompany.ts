import { getCompany } from "@/lib/api/getCompany"
import { queryKeys } from "@/queryKeys/queryKeys"
import { useQuery } from "@tanstack/react-query"

export const useGetCompany = (id: string | null) => {
  return useQuery({
    queryKey: queryKeys.company(id),
    queryFn: () => getCompany(id),
    enabled: !!id
  });
};