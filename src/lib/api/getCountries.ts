import { countries } from "../db/countries";
import { delay } from "../apiSimulations/delay";
import { jitter } from "../apiSimulations/jitter";

export const fetchCountries = async() => {
  await delay(jitter());
  return countries;
}