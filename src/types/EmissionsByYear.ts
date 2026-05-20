import { Source } from "./source";

type MonthlyEmission = {
  source: Source;
  emissions: number;
};

type MonthData = {
  month: string;
  totalEmissions: number;
  emissions: MonthlyEmission[];
};


export type EmissionsByYear = {
  year: string;
  months: MonthData[];
};