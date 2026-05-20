"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import type { GhgEmission } from "@/lib/types";
import { groupEmissionsByYear } from "@/utils/groupEmissionsByYear";

import styles from "./TotalEmissionsChart.module.scss";

const GHG_EMISSION_COLOR = "hsl(197,55%,42%)";

type Props = {
  emissions: GhgEmission[];
};

export const TotalEmissionsChart = ({ emissions }: Props) => {
  if (!emissions) {
    return null;
  }

  const groupedEmissions = groupEmissionsByYear(emissions);

  const chartData = groupedEmissions[0].months.map((month) => ({
    month: month.month,
    totalEmissions: month.totalEmissions,
  }));

  return (
    <article className={styles.totalEmissionsChart}>
      <header className={styles.header}>
        <h3 className={styles.title}>월별 총 탄소 배출 추이</h3>
        <p className={styles.description}>2025년 전체 (tCO₂e)</p>
      </header>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="grad-total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={GHG_EMISSION_COLOR} stopOpacity={0.25} />
                <stop offset="100%" stopColor={GHG_EMISSION_COLOR} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(145,15%,88%)" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(160,10%,70%)" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(160,10%,70%)" width={40}/>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="totalEmissions"
              stroke={GHG_EMISSION_COLOR}
              strokeWidth={2}
              fill="url(#grad-total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
};