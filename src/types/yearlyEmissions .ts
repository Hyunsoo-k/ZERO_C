import { Source } from "./source";

type MonthlyEmission = {
  source: Source;
  emissions: number;
};

export type YearlyEmissions = {
  year: string;
  emissions: MonthlyEmission[];
};