import type { GhgEmission } from "@/types/ghgEmission";

export const calcMonthDiff = (
  emissions: GhgEmission[],
  year: string,
  month: string
): string | null => {
  const currentYearMonth = `${year}-${month}`;
  const prevYearMonth =
    month === "01"
      ? `${Number(year) - 1}-12`
      : `${year}-${String(Number(month) - 1).padStart(2, "0")}`;

  const currentTotal = emissions
    .filter((item) => item.yearMonth === currentYearMonth)
    .reduce((acc, cur) => acc + cur.emissions, 0);

  const prevTotal = emissions
    .filter((item) => item.yearMonth === prevYearMonth)
    .reduce((acc, cur) => acc + cur.emissions, 0);

  if (!prevTotal) return null;

  const diff = Number(((currentTotal - prevTotal) / prevTotal * 100).toFixed(1));

  return diff > 0 ? `+${diff}%` : `${diff}%`;
};