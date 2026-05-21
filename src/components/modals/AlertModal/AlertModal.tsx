"use client";

import { createPortal } from "react-dom";

import { useAleryModalStore } from "@/store/useAlertModalStore";
import { Button } from "@/components/ui/buttons/Button/Button";

import styles from "./AlertModal.module.scss";

export const AlertModal = () => {
  const { isOpen, message, onClick } = useAleryModalStore();

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.alertModal}>
      <div className={styles.body}>
        <p className={styles.message}>{message}</p>
      </div>
      <footer className={styles.footer}>
        <Button content="닫기" onClick={onClick} />
      </footer>
    </div>,
    document.body
  );
};