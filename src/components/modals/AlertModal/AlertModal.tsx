"use client";

import { createPortal } from "react-dom";

import styles from "./AlertModal.module.scss";

export const AlertModal = () => {

  return createPortal(
    <div className={styles.alertModal}>

    </div>,
    document.body
  );
};