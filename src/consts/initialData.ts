import { GhgEmission } from "@/types/ghgEmission"

export const INITIAL_COMPANY_DATA: {
  id: string,
  name: string,
  country: string,
  emissions: GhgEmission[]
} = {
    id: "c2",
    name: "Globex",
    country: "DE",
    emissions: [
      // 2025-01
      { yearMonth: "2025-01", source: "diesel", emissions: 120 },
      { yearMonth: "2025-01", source: "electricity", emissions: 95 },
      { yearMonth: "2025-01", source: "co2", emissions: 55 },

      // 2025-02
      { yearMonth: "2025-02", source: "diesel", emissions: 115 },
      { yearMonth: "2025-02", source: "electricity", emissions: 88 },
      { yearMonth: "2025-02", source: "co2", emissions: 60 },

      // 2025-03
      { yearMonth: "2025-03", source: "diesel", emissions: 130 },
      { yearMonth: "2025-03", source: "electricity", emissions: 92 },
      { yearMonth: "2025-03", source: "gasoline", emissions: 40 },

      // 2025-04
      { yearMonth: "2025-04", source: "diesel", emissions: 108 },
      { yearMonth: "2025-04", source: "electricity", emissions: 100 },
      { yearMonth: "2025-04", source: "gasoline", emissions: 45 },

      // 2025-05
      { yearMonth: "2025-05", source: "diesel", emissions: 95 },
      { yearMonth: "2025-05", source: "electricity", emissions: 110 },
      { yearMonth: "2025-05", source: "co2", emissions: 48 },

      // 2025-06
      { yearMonth: "2025-06", source: "diesel", emissions: 88 },
      { yearMonth: "2025-06", source: "electricity", emissions: 125 },
      { yearMonth: "2025-06", source: "gasoline", emissions: 52 },

      // 2025-07
      { yearMonth: "2025-07", source: "diesel", emissions: 80 },
      { yearMonth: "2025-07", source: "electricity", emissions: 140 },
      { yearMonth: "2025-07", source: "co2", emissions: 42 },

      // 2025-08
      { yearMonth: "2025-08", source: "diesel", emissions: 85 },
      { yearMonth: "2025-08", source: "electricity", emissions: 138 },
      { yearMonth: "2025-08", source: "gasoline", emissions: 48 },

      // 2025-09
      { yearMonth: "2025-09", source: "diesel", emissions: 98 },
      { yearMonth: "2025-09", source: "electricity", emissions: 118 },
      { yearMonth: "2025-09", source: "co2", emissions: 50 },

      // 2025-10
      { yearMonth: "2025-10", source: "diesel", emissions: 112 },
      { yearMonth: "2025-10", source: "electricity", emissions: 105 },
      { yearMonth: "2025-10", source: "gasoline", emissions: 44 },

      // 2025-11
      { yearMonth: "2025-11", source: "diesel", emissions: 125 },
      { yearMonth: "2025-11", source: "electricity", emissions: 98 },
      { yearMonth: "2025-11", source: "co2", emissions: 62 },

      // 2025-12
      { yearMonth: "2025-12", source: "diesel", emissions: 142 },
      { yearMonth: "2025-12", source: "electricity", emissions: 90 },
      { yearMonth: "2025-12", source: "gasoline", emissions: 38 },

      // 2026-01
      { yearMonth: "2026-01", source: "diesel", emissions: 138 },
      { yearMonth: "2026-01", source: "electricity", emissions: 88 },
      { yearMonth: "2026-01", source: "co2", emissions: 58 },

      // 2026-02
      { yearMonth: "2026-02", source: "diesel", emissions: 130 },
      { yearMonth: "2026-02", source: "electricity", emissions: 92 },
      { yearMonth: "2026-02", source: "gasoline", emissions: 35 },

      // 2026-03
      { yearMonth: "2026-03", source: "diesel", emissions: 122 },
      { yearMonth: "2026-03", source: "electricity", emissions: 98 },
      { yearMonth: "2026-03", source: "co2", emissions: 52 },

      // 2026-04
      { yearMonth: "2026-04", source: "diesel", emissions: 110 },
      { yearMonth: "2026-04", source: "electricity", emissions: 108 },
      { yearMonth: "2026-04", source: "gasoline", emissions: 42 },

      // 2026-05
      { yearMonth: "2026-05", source: "diesel", emissions: 102 },
      { yearMonth: "2026-05", source: "electricity", emissions: 115 },
      { yearMonth: "2026-05", source: "co2", emissions: 46 },
    ]
  }