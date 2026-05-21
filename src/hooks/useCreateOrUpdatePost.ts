import { QueryClient, useMutation } from "@tanstack/react-query"

import type { Post } from "@/types/post"
import { queryKeys } from "@/queryKeys/queryKeys"
import { createOrUpdatePost } from "@/lib/api/createOrUpdatePost"
import { usePostDetailStore } from "@/store/usePostDetailStore";
import { useAlertModalStore } from "@/store/useAlertModalStore";

export const useCreateOrUpdatePost = (id: string) => {
  const queryClient = new QueryClient();
  const { close: closePostDail } = usePostDetailStore();
  const { open: openAlertModal, close: closeAlertModal } = useAlertModalStore();

  return useMutation({
    mutationFn: (requestBody: Post) => createOrUpdatePost(requestBody),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts(id) });
      closePostDail();
    },
    onError: () => {
      openAlertModal("요청에 실패하였습니다.", closeAlertModal);
    }
  });
};