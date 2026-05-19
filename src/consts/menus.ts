import type { IconType } from "react-icons";
import { RiDashboardFill } from "react-icons/ri";

import type { Category } from "@/types/category";

export const MENUS: { icon: IconType; name: string; category: Category }[] = [
  { icon: RiDashboardFill, name: "대시보드", category: "dashboard" },
];