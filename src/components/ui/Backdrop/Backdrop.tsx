"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavDrawerStore } from "@/store/useNavDrawerStore";

import styles from "./Backdrop.module.scss";

export const Backdrop = () => {
  const { isOpen: isNavDrawerOpen, close: closeNavDrawer } = useNavDrawerStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  if (!isMounted || !isNavDrawerOpen) {
    return null;
  }
  
  return createPortal(
    <div onMouseDown={closeNavDrawer} className={styles.backdrop} />,
    document.body
  );
};