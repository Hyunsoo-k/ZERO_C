import type { GhgEmission } from "@/types/ghgEmission";
import type { Source } from "@/types/source";

type SourceEmission = {
  source: Source;
  emissions: number;
};

type EmissionBySource = {
  sources: SourceEmission[];
  totalEmissions: number;
};

export const processMonthlyEmissionsBySource = (
  data: GhgEmission[],
  year?: string,
  month?: string
): EmissionBySource => {
  const sourceMap = new Map<Source, number>();

  for (const { yearMonth, source, emissions } of data) {
    const [itemYear, itemMonth] = yearMonth.split("-");
    const matchYear = year ? itemYear === year : true;
    const matchMonth = month ? itemMonth === month : true;
    if (!matchYear || !matchMonth) {
      continue;
    }

    sourceMap.set(source, (sourceMap.get(source) ?? 0) + emissions);
  }

  const sources = [...sourceMap.entries()].map(([source, emissions]) => ({
    source,
    emissions,
  }));

  const totalEmissions = sources.reduce((acc, cur) => acc + cur.emissions, 0);

  return { sources, totalEmissions };
};