import type { Source } from "@/types/Source";
import type { GhgEmission } from "@/types/ghgEmission";

type MonthlyEmission = {
  month: string;
  totalEmissions: number;
  emissionsBySource: { source: Source; emissions: number; }[];
};

type MonthlyEmissions = MonthlyEmission[];

export const processMonthlyEmissions = (data: GhgEmission[]): MonthlyEmissions => {
  const monthMap = new Map<string, Map<Source, number>>();

  for (const { yearMonth, source, emissions } of data) {
    if (!monthMap.has(yearMonth)) {
      monthMap.set(yearMonth, new Map());
    }

    const sourceMap = monthMap.get(yearMonth)!;
    sourceMap.set(source, (sourceMap.get(source) ?? 0) + emissions);
  }

  return [...monthMap.entries()].map(([month, sourceMap]) => {
    const emissionsBySource = [...sourceMap.entries()].map(([source, emissions]) => ({
      source,
      emissions,
    }));

    const totalEmissions = emissionsBySource.reduce((acc, cur) => acc + cur.emissions, 0);

    return {
      month: month.slice(5),
      totalEmissions,
      emissionsBySource,
    };
  });
};