import { companies } from "../db/companies";
import { delay } from "../apiSimulations/delay";
import { jitter } from "../apiSimulations/jitter";

export const getCompanies = async() => {
  await delay(jitter());
  return companies;
};