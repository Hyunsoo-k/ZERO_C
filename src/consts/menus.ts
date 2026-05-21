import type { IconType } from "react-icons";
import { RiDashboardFill } from "react-icons/ri";
import { IoDocumentsOutline } from "react-icons/io5";


import type { Category } from "@/types/category";

export const MENUS: { icon: IconType; name: string; category: Category }[] = [
  { icon: RiDashboardFill, name: "대시보드", category: "dashboard" },
  { icon: IoDocumentsOutline, name: "게시글", category: "posts" },
];