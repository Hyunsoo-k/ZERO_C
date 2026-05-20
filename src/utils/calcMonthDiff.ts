export const calcMonthDiff = (
  monthlyEmissions: { month: string; totalEmissions: number }[],
  currentMonth: string
): string | null => {
  const currentIndex = monthlyEmissions.findIndex((item) => item.month === currentMonth);
  const currentEmissions = monthlyEmissions[currentIndex]?.totalEmissions;
  const prevEmissions = monthlyEmissions[currentIndex - 1]?.totalEmissions;

  if (!prevEmissions) {
    return null;
  }

  const diff = Number(((currentEmissions - prevEmissions) / prevEmissions * 100).toFixed(1));

  return diff > 0 ? `+${diff}%` : `${diff}%`;
};