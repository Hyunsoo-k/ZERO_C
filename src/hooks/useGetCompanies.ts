import { useQuery } from "@tanstack/react-query"

import { fetchCompanies } from "@/lib/api"

export const useGetCompanies = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: fetchCompanies
  });
};