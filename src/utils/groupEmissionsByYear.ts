import type { Source } from "@/types/Source";
import type { GhgEmission } from "@/lib/types";

type MonthlyEmission = {
  source: Source;
  emissions: number;
};

type MonthData = {
  month: string;
  totalEmissions: number;
  emissions: MonthlyEmission[];
};

type AnnualEmissions = {
  year: string;
  months: MonthData[];
};

export const groupEmissionsByYear = (data: GhgEmission[]): AnnualEmissions[] => {
  const yearMap = new Map<string, Map<string, Map<Source, number>>>();

  for (const { yearMonth, source, emissions } of data) {
    const [year, month] = yearMonth.split("-");

    if (!yearMap.has(year)) {
      yearMap.set(year, new Map());
    }

    const monthMap = yearMap.get(year)!;

    if (!monthMap.has(month)) {
      monthMap.set(month, new Map());
    }

    const sourceMap = monthMap.get(month)!;
    sourceMap.set(source, (sourceMap.get(source) ?? 0) + emissions);
  }

  return [...yearMap.entries()].map(([year, monthMap]) => ({
    year,
    months: [...monthMap.entries()].map(([month, sourceMap]) => {
      const emissions = [...sourceMap.entries()].map(([source, emissions]) => ({
        source,
        emissions,
      }));

      const totalEmissions = emissions.reduce((acc, cur) => acc + cur.emissions, 0);

      return {
        month,
        totalEmissions,
        emissions,
      };
    }),
  }));
};