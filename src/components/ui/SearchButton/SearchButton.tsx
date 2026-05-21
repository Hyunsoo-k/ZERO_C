import { CiSearch } from "react-icons/ci";

import { useSearchModalStore } from "@/store/useSearchModal";

import styles from "./SearchButton.module.scss";

export const SearchButton = () => {
  const { open: openSearchModal } = useSearchModalStore();
  
  return (
    <button type="button" onClick={openSearchModal} className={styles.searchButton}>
      <CiSearch className={styles.icon} />
      검색
    </button>
  );
};