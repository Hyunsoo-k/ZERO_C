import type { Source } from "./source";

export type GhgEmission = {
  yearMonth: string;  // "2025-01", "2025-02", "2025-03"
  source: Source;
  emissions: number;
};