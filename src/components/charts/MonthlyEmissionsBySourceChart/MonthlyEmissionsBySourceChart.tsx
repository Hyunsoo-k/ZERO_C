"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { GhgEmission } from "@/types/ghgEmission";
import { processMonthlyEmissionsBySource } from "@/utils/processMonthlyEmissionsBySource";
import { useDateStore } from "@/store/useDateStore";

import styles from "./MonthlyEmissionsBySourceChart.module.scss";

const SOURCE_COLORS: Record<string, string> = {
  lpg: "#25935F",
  gasoline: "#2A9D90",
  electricity: "#3085A6",
  diesel: "#E1B137",
  co2: "#F29040",
};

type Props = {
  emissions: GhgEmission[];
};

export const MonthlyEmissionsBySourceChart = ({ emissions }: Props) => {
  const { date } = useDateStore();
  const monthlyEmissionsBySource = processMonthlyEmissionsBySource(emissions, date.year, date.month);
  const chartData = monthlyEmissionsBySource.sources;

  return (
    <article data-testid="monthly-emissions-chart" className={styles.monthlyEmissionsBySourceChart}>
      <header className={styles.header}>
        <h3 className={styles.title}>자원별 월 총 탄소 배출량</h3>
        <p className={styles.description}>{date.year}년 {date.month}월 (tCO₂e)</p>
      </header>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(145,15%,88%)" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11 }} stroke="hsl(160,10%,70%)" />
            <YAxis type="category" dataKey="source" tick={{ fontSize: 11 }} stroke="hsl(160,10%,70%)" width={40} />
            <Tooltip
              formatter={(value: unknown) => [`${value} tCO₂e`, "배출량"]}
            />
            <Bar dataKey="emissions" radius={[0, 4, 4, 0]}>
              {chartData.map((entry) => (
                <Cell
                  key={entry.source}
                  fill={SOURCE_COLORS[entry.source] ?? "hsl(152,60%,36%)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
};