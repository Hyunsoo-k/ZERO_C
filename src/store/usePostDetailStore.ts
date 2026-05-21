import { create } from "zustand";

import { useBackdropStore } from "./useBackdropStore";
import { Post } from "@/types/post";

type PostDetailStore = {
  isOpen: boolean;
  open: (post: Post, mode: "viewer" | "editor") => void;
  close: () => void;
  mode: "viewer" | "editor" | null;
  changeMode: () => void;
  post: Post | null;
};

export const usePostDetailStore = create<PostDetailStore>((set) => ({
  isOpen: false,
  open: (post, mode) => {
    useBackdropStore.getState().open(() => set({ isOpen: false }));
    set({ isOpen: true, post, mode });
  },
  close: () => {
    useBackdropStore.getState().close();
    set({ isOpen: false, post: null, mode: null });
  },
  mode: null,
  changeMode: () => {
    set((state) => ({
      mode: state.mode === "viewer" ? "editor" : "viewer"
    }));
  },
  post: null
}));