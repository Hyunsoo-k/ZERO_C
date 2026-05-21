"use client";

import { RefObject, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { usePostDetailStore } from "@/store/usePostDetailStore";
import { useIdStore } from "@/store/useIdStore";
import { useCreateOrUpdatePost } from "@/hooks/useCreateOrUpdatePost";
import { Button } from "@/components/ui/buttons/Button/Button";

import styles from "./PostDetailModal.module.scss";
import { useDeletePost } from "@/hooks/useDeletePost";

export const PostDetailModal = () => {
  const { isOpen, open, close, post, mode } = usePostDetailStore();
  const { id } = useIdStore();
  const { mutate: createOrUpdatePost } = useCreateOrUpdatePost(id);
  const { mutate: deletePost } = useDeletePost(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleInputRef = useRef<HTMLTextAreaElement | null>(null);
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);

  if (!isOpen || !post || !mode) {
    return null;
  }

  const handleResizeHeight = (inputRef: RefObject<HTMLTextAreaElement | null>) => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    handleResizeHeight(titleInputRef);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    handleResizeHeight(contentInputRef);
  };

  const handleOpenEditor = () => {
    open(post, "editor");
  };

  const handleDelete = () => {
    close();
    deletePost();
  };

  const handleSubmit = () => {
    const requestBody = {
      ...post,
      resourceId: id,
      title,
      content
    };

    createOrUpdatePost(requestBody);
  };

  const handleCancelClick = () => {
    open(post, "viewer");
  };

  return createPortal(
    <div className={styles.postDetailViewer}>
      <header className={styles.header}>
        {mode === "viewer" ? (
          <>
          <h3 className={styles.title}>{post.title}</h3>
          <small className={styles.date}>{post.dateTime}</small>
          </>
        ) : (
          <textarea
            placeholder="제목을 입력해 주세요."
            autoComplete="false"
            spellCheck="false"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            ref={titleInputRef}
            className={styles.titleInput}
          />
        )}
      </header>
      <div className={styles.body}>
        {mode === "viewer" ? (
          <p className={styles.content}>{post.content}</p>
        ) : (
          <textarea
            placeholder="내용을 입력해 주세요."
            autoComplete="false"
            spellCheck="false"
            value={content}
            onChange={(e) => handleContentChange(e.target.value)}
            ref={contentInputRef}
            className={styles.contentInput}
          />
        )}
      </div>
      <footer className={styles.footer}>
        <Button
          content={mode === "viewer" ? "수정" : "등록"}
          onClick={mode === "viewer" ? handleOpenEditor : handleSubmit }
        />
        <Button
          content={mode === "viewer" ? "삭제" : "취소"}
          onClick={mode === "viewer" ? handleDelete : handleCancelClick}
        />
      </footer>
    </div>,
    document.body
  );
};