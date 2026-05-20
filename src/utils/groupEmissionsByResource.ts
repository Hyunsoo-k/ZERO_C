import type { GhgEmission } from "@/lib/types";
import type { Source } from "@/types/Source";

type SourceEmission = {
  source: Source;
  emissions: number;
};

type AnnualSourceEmissions = {
  year: string;
  sources: SourceEmission[];
  totalEmissions: number;
};

export const groupEmissionsBySource = (data: GhgEmission[]): AnnualSourceEmissions[] => {
  const yearMap = new Map<string, Map<Source, number>>();

  for (const { yearMonth, source, emissions } of data) {
    const [year] = yearMonth.split("-");

    if (!yearMap.has(year)) {
      yearMap.set(year, new Map());
    }

    const sourceMap = yearMap.get(year)!;
    sourceMap.set(source, (sourceMap.get(source) ?? 0) + emissions);
  }

  return [...yearMap.entries()].map(([year, sourceMap]) => {
    const sources = [...sourceMap.entries()].map(([source, emissions]) => ({
      source,
      emissions,
    }));

    const totalEmissions = sources.reduce((acc, cur) => acc + cur.emissions, 0);

    return {
      year,
      sources,
      totalEmissions,
    };
  });
};