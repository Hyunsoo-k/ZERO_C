import { GhgEmission } from "./ghgEmission";

export type Company = {
  id: string;
  name: string;
  country: string;
  emissions: GhgEmission[];
};