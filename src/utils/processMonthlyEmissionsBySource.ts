import type { GhgEmission } from "@/types/ghgEmission";
import type { Source } from "@/types/Source";

type SourceEmission = {
  source: Source;
  emissions: number;
};

type MonthlyEmissionBySource = {
  month: string;
  sources: SourceEmission[];
  totalEmissions: number;
};

export const processMonthlyEmissionsBySource = (data: GhgEmission[]): MonthlyEmissionBySource[] => {
  const monthMap = new Map<string, Map<Source, number>>();

  for (const { yearMonth, source, emissions } of data) {
    if (!monthMap.has(yearMonth)) {
      monthMap.set(yearMonth, new Map());
    }

    const sourceMap = monthMap.get(yearMonth)!;
    sourceMap.set(source, (sourceMap.get(source) ?? 0) + emissions);
  }

  return [...monthMap.entries()].map(([month, sourceMap]) => {
    const sources = [...sourceMap.entries()].map(([source, emissions]) => ({
      source,
      emissions,
    }));

    const totalEmissions = sources.reduce((acc, cur) => acc + cur.emissions, 0);

    return { month, sources, totalEmissions };
  });
};