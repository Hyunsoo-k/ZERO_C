"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useBackdropStore } from "@/store/useBackdropStore";

import styles from "./Backdrop.module.scss";

export const Backdrop = () => {
  const { isOpen, close } = useBackdropStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMounted]);

  if (!isMounted || !isOpen) {
    return null;
  }
  
  return createPortal(
    <div onMouseDown={close} className={styles.backdrop} style={{ overflow: isOpen ? "hidden" : ""  }} />,
    document.body
  );
};