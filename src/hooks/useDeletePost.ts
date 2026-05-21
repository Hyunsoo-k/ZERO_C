import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deletePost } from "@/lib/api/deletePost";
import { queryKeys } from "@/queryKeys/queryKeys";
import { usePostDetailStore } from "@/store/usePostDetailStore";
import { useAlertModalStore } from "@/store/useAlertModalStore";

export const useDeletePost = (id: string) => {
  const queryClient = useQueryClient();
  const { close: closePostDail } = usePostDetailStore();
  const { open: openAlertModal, close: closeAlertModal } = useAlertModalStore();
  
  return useMutation({
    mutationFn: () => deletePost(id),
    onSuccess: () => {
      closePostDail();
      queryClient.invalidateQueries({ queryKey: queryKeys.posts(id) });
    },
    onError: () => {
      openAlertModal("요청에 실패하였습니다.", closeAlertModal);
    }
  });
};