import type { Source } from "./source";

type MonthlyEmission = {
  source: Source;
  emissions: number;
};

export type MonthlyEmissions = {
  month: string;
  emissions: MonthlyEmission[];
};