export const calcEvaluation = (monthDiff: string | null): "good" | "normal" | "bad" | null => {
  if (!monthDiff) {
    return null;
  }

  const diff = Number(monthDiff.replace("%", ""));

  if (diff < -5) return "good";
  if (diff > 5) return "bad";
  return "normal";
};