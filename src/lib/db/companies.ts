import { Company } from "@/types/company";

const companies: Company[] = [
  {
    id: "c1",
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
  },
  {
    id: "c2",
    name: "Initech",
    country: "JP",
    emissions: [
      // 2025-01
      { yearMonth: "2025-01", source: "electricity", emissions: 200 },
      { yearMonth: "2025-01", source: "lpg", emissions: 30 },

      // 2025-02
      { yearMonth: "2025-02", source: "electricity", emissions: 195 },
      { yearMonth: "2025-02", source: "lpg", emissions: 28 },

      // 2025-03
      { yearMonth: "2025-03", source: "electricity", emissions: 188 },
      { yearMonth: "2025-03", source: "lpg", emissions: 32 },
      { yearMonth: "2025-03", source: "co2", emissions: 40 },

      // 2025-04
      { yearMonth: "2025-04", source: "electricity", emissions: 175 },
      { yearMonth: "2025-04", source: "lpg", emissions: 25 },

      // 2025-05
      { yearMonth: "2025-05", source: "electricity", emissions: 168 },
      { yearMonth: "2025-05", source: "lpg", emissions: 22 },
      { yearMonth: "2025-05", source: "co2", emissions: 35 },

      // 2025-06
      { yearMonth: "2025-06", source: "electricity", emissions: 210 },
      { yearMonth: "2025-06", source: "lpg", emissions: 20 },

      // 2025-07
      { yearMonth: "2025-07", source: "electricity", emissions: 240 },
      { yearMonth: "2025-07", source: "lpg", emissions: 18 },
      { yearMonth: "2025-07", source: "co2", emissions: 30 },

      // 2025-08
      { yearMonth: "2025-08", source: "electricity", emissions: 255 },
      { yearMonth: "2025-08", source: "lpg", emissions: 18 },

      // 2025-09
      { yearMonth: "2025-09", source: "electricity", emissions: 220 },
      { yearMonth: "2025-09", source: "lpg", emissions: 22 },
      { yearMonth: "2025-09", source: "co2", emissions: 38 },

      // 2025-10
      { yearMonth: "2025-10", source: "electricity", emissions: 198 },
      { yearMonth: "2025-10", source: "lpg", emissions: 26 },

      // 2025-11
      { yearMonth: "2025-11", source: "electricity", emissions: 185 },
      { yearMonth: "2025-11", source: "lpg", emissions: 30 },
      { yearMonth: "2025-11", source: "co2", emissions: 42 },

      // 2025-12
      { yearMonth: "2025-12", source: "electricity", emissions: 192 },
      { yearMonth: "2025-12", source: "lpg", emissions: 35 },

      // 2026-01
      { yearMonth: "2026-01", source: "electricity", emissions: 188 },
      { yearMonth: "2026-01", source: "lpg", emissions: 32 },
      { yearMonth: "2026-01", source: "co2", emissions: 40 },

      // 2026-02
      { yearMonth: "2026-02", source: "electricity", emissions: 180 },
      { yearMonth: "2026-02", source: "lpg", emissions: 28 },

      // 2026-03
      { yearMonth: "2026-03", source: "electricity", emissions: 172 },
      { yearMonth: "2026-03", source: "lpg", emissions: 25 },
      { yearMonth: "2026-03", source: "co2", emissions: 36 },

      // 2026-04
      { yearMonth: "2026-04", source: "electricity", emissions: 165 },
      { yearMonth: "2026-04", source: "lpg", emissions: 22 },

      // 2026-05
      { yearMonth: "2026-05", source: "electricity", emissions: 178 },
      { yearMonth: "2026-05", source: "lpg", emissions: 20 },
      { yearMonth: "2026-05", source: "co2", emissions: 33 },
    ]
  },
  {
    id: "c3",
    name: "Umbrella",
    country: "CH",
    emissions: [
      // 2025-01
      { yearMonth: "2025-01", source: "diesel", emissions: 80 },
      { yearMonth: "2025-01", source: "gasoline", emissions: 60 },
      { yearMonth: "2025-01", source: "lpg", emissions: 90 },
      { yearMonth: "2025-01", source: "co2", emissions: 110 },

      // 2025-02
      { yearMonth: "2025-02", source: "diesel", emissions: 75 },
      { yearMonth: "2025-02", source: "gasoline", emissions: 55 },
      { yearMonth: "2025-02", source: "lpg", emissions: 85 },
      { yearMonth: "2025-02", source: "co2", emissions: 105 },

      // 2025-03
      { yearMonth: "2025-03", source: "diesel", emissions: 88 },
      { yearMonth: "2025-03", source: "gasoline", emissions: 62 },
      { yearMonth: "2025-03", source: "lpg", emissions: 78 },
      { yearMonth: "2025-03", source: "co2", emissions: 98 },

      // 2025-04
      { yearMonth: "2025-04", source: "diesel", emissions: 92 },
      { yearMonth: "2025-04", source: "gasoline", emissions: 70 },
      { yearMonth: "2025-04", source: "electricity", emissions: 55 },
      { yearMonth: "2025-04", source: "co2", emissions: 88 },

      // 2025-05
      { yearMonth: "2025-05", source: "diesel", emissions: 85 },
      { yearMonth: "2025-05", source: "gasoline", emissions: 75 },
      { yearMonth: "2025-05", source: "electricity", emissions: 62 },
      { yearMonth: "2025-05", source: "co2", emissions: 80 },

      // 2025-06
      { yearMonth: "2025-06", source: "diesel", emissions: 78 },
      { yearMonth: "2025-06", source: "gasoline", emissions: 80 },
      { yearMonth: "2025-06", source: "electricity", emissions: 75 },
      { yearMonth: "2025-06", source: "co2", emissions: 72 },

      // 2025-07
      { yearMonth: "2025-07", source: "diesel", emissions: 70 },
      { yearMonth: "2025-07", source: "gasoline", emissions: 85 },
      { yearMonth: "2025-07", source: "electricity", emissions: 88 },
      { yearMonth: "2025-07", source: "co2", emissions: 65 },

      // 2025-08
      { yearMonth: "2025-08", source: "diesel", emissions: 72 },
      { yearMonth: "2025-08", source: "gasoline", emissions: 82 },
      { yearMonth: "2025-08", source: "electricity", emissions: 92 },
      { yearMonth: "2025-08", source: "co2", emissions: 68 },

      // 2025-09
      { yearMonth: "2025-09", source: "diesel", emissions: 80 },
      { yearMonth: "2025-09", source: "gasoline", emissions: 75 },
      { yearMonth: "2025-09", source: "electricity", emissions: 80 },
      { yearMonth: "2025-09", source: "co2", emissions: 75 },

      // 2025-10
      { yearMonth: "2025-10", source: "diesel", emissions: 88 },
      { yearMonth: "2025-10", source: "gasoline", emissions: 68 },
      { yearMonth: "2025-10", source: "lpg", emissions: 72 },
      { yearMonth: "2025-10", source: "co2", emissions: 85 },

      // 2025-11
      { yearMonth: "2025-11", source: "diesel", emissions: 95 },
      { yearMonth: "2025-11", source: "gasoline", emissions: 62 },
      { yearMonth: "2025-11", source: "lpg", emissions: 80 },
      { yearMonth: "2025-11", source: "co2", emissions: 95 },

      // 2025-12
      { yearMonth: "2025-12", source: "diesel", emissions: 102 },
      { yearMonth: "2025-12", source: "gasoline", emissions: 58 },
      { yearMonth: "2025-12", source: "lpg", emissions: 88 },
      { yearMonth: "2025-12", source: "co2", emissions: 108 },

      // 2026-01
      { yearMonth: "2026-01", source: "diesel", emissions: 98 },
      { yearMonth: "2026-01", source: "gasoline", emissions: 55 },
      { yearMonth: "2026-01", source: "lpg", emissions: 92 },
      { yearMonth: "2026-01", source: "co2", emissions: 112 },

      // 2026-02
      { yearMonth: "2026-02", source: "diesel", emissions: 90 },
      { yearMonth: "2026-02", source: "gasoline", emissions: 52 },
      { yearMonth: "2026-02", source: "lpg", emissions: 86 },
      { yearMonth: "2026-02", source: "co2", emissions: 105 },

      // 2026-03
      { yearMonth: "2026-03", source: "diesel", emissions: 85 },
      { yearMonth: "2026-03", source: "gasoline", emissions: 58 },
      { yearMonth: "2026-03", source: "electricity", emissions: 60 },
      { yearMonth: "2026-03", source: "co2", emissions: 95 },

      // 2026-04
      { yearMonth: "2026-04", source: "diesel", emissions: 80 },
      { yearMonth: "2026-04", source: "gasoline", emissions: 65 },
      { yearMonth: "2026-04", source: "electricity", emissions: 68 },
      { yearMonth: "2026-04", source: "co2", emissions: 88 },

      // 2026-05
      { yearMonth: "2026-05", source: "diesel", emissions: 78 },
      { yearMonth: "2026-05", source: "gasoline", emissions: 70 },
      { yearMonth: "2026-05", source: "electricity", emissions: 72 },
      { yearMonth: "2026-05", source: "co2", emissions: 82 },
    ]
  },
  {
    id: "c4",
    name: "Stark Industries",
    country: "IN",
    emissions: [
      // 2025-01
      { yearMonth: "2025-01", source: "coal", emissions: 320 },
      { yearMonth: "2025-01", source: "diesel", emissions: 150 },
      { yearMonth: "2025-01", source: "electricity", emissions: 180 },

      // 2025-02
      { yearMonth: "2025-02", source: "coal", emissions: 310 },
      { yearMonth: "2025-02", source: "diesel", emissions: 145 },
      { yearMonth: "2025-02", source: "electricity", emissions: 172 },

      // 2025-03
      { yearMonth: "2025-03", source: "coal", emissions: 335 },
      { yearMonth: "2025-03", source: "diesel", emissions: 158 },
      { yearMonth: "2025-03", source: "electricity", emissions: 185 },
      { yearMonth: "2025-03", source: "co2", emissions: 90 },

      // 2025-04
      { yearMonth: "2025-04", source: "coal", emissions: 300 },
      { yearMonth: "2025-04", source: "diesel", emissions: 140 },
      { yearMonth: "2025-04", source: "electricity", emissions: 195 },

      // 2025-05
      { yearMonth: "2025-05", source: "coal", emissions: 288 },
      { yearMonth: "2025-05", source: "diesel", emissions: 135 },
      { yearMonth: "2025-05", source: "electricity", emissions: 205 },
      { yearMonth: "2025-05", source: "co2", emissions: 85 },

      // 2025-06
      { yearMonth: "2025-06", source: "coal", emissions: 275 },
      { yearMonth: "2025-06", source: "diesel", emissions: 128 },
      { yearMonth: "2025-06", source: "electricity", emissions: 230 },

      // 2025-07
      { yearMonth: "2025-07", source: "coal", emissions: 260 },
      { yearMonth: "2025-07", source: "diesel", emissions: 120 },
      { yearMonth: "2025-07", source: "electricity", emissions: 255 },
      { yearMonth: "2025-07", source: "co2", emissions: 78 },

      // 2025-08
      { yearMonth: "2025-08", source: "coal", emissions: 265 },
      { yearMonth: "2025-08", source: "diesel", emissions: 122 },
      { yearMonth: "2025-08", source: "electricity", emissions: 260 },

      // 2025-09
      { yearMonth: "2025-09", source: "coal", emissions: 278 },
      { yearMonth: "2025-09", source: "diesel", emissions: 130 },
      { yearMonth: "2025-09", source: "electricity", emissions: 240 },
      { yearMonth: "2025-09", source: "co2", emissions: 82 },

      // 2025-10
      { yearMonth: "2025-10", source: "coal", emissions: 295 },
      { yearMonth: "2025-10", source: "diesel", emissions: 142 },
      { yearMonth: "2025-10", source: "electricity", emissions: 210 },

      // 2025-11
      { yearMonth: "2025-11", source: "coal", emissions: 315 },
      { yearMonth: "2025-11", source: "diesel", emissions: 148 },
      { yearMonth: "2025-11", source: "electricity", emissions: 188 },
      { yearMonth: "2025-11", source: "co2", emissions: 88 },

      // 2025-12
      { yearMonth: "2025-12", source: "coal", emissions: 330 },
      { yearMonth: "2025-12", source: "diesel", emissions: 155 },
      { yearMonth: "2025-12", source: "electricity", emissions: 175 },

      // 2026-01
      { yearMonth: "2026-01", source: "coal", emissions: 325 },
      { yearMonth: "2026-01", source: "diesel", emissions: 152 },
      { yearMonth: "2026-01", source: "electricity", emissions: 170 },
      { yearMonth: "2026-01", source: "co2", emissions: 86 },

      // 2026-02
      { yearMonth: "2026-02", source: "coal", emissions: 315 },
      { yearMonth: "2026-02", source: "diesel", emissions: 148 },
      { yearMonth: "2026-02", source: "electricity", emissions: 165 },

      // 2026-03
      { yearMonth: "2026-03", source: "coal", emissions: 308 },
      { yearMonth: "2026-03", source: "diesel", emissions: 142 },
      { yearMonth: "2026-03", source: "electricity", emissions: 178 },
      { yearMonth: "2026-03", source: "co2", emissions: 80 },

      // 2026-04
      { yearMonth: "2026-04", source: "coal", emissions: 295 },
      { yearMonth: "2026-04", source: "diesel", emissions: 136 },
      { yearMonth: "2026-04", source: "electricity", emissions: 188 },

      // 2026-05
      { yearMonth: "2026-05", source: "coal", emissions: 282 },
      { yearMonth: "2026-05", source: "diesel", emissions: 130 },
      { yearMonth: "2026-05", source: "electricity", emissions: 198 },
      { yearMonth: "2026-05", source: "co2", emissions: 76 },
    ]
  },
];

export let _companies = [...companies];