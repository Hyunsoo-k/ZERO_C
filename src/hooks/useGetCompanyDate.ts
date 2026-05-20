import { useQuery } from "@tanstack/react-query"

export const useGetCompanyDate = () => {
  return useQuery({
    queryKey: ["companyDate"],
  })
}