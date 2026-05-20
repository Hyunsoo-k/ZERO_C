import { getPosts } from "@/lib/api/getPosts"
import { queryKeys } from "@/queryKeys/queryKeys"
import { useQuery } from "@tanstack/react-query"

export const useGetPosts = (id: string | null) => {
  return useQuery({
    queryKey: queryKeys.posts(id),
    queryFn: () => getPosts(id!),
    enabled: !!id
  });
};