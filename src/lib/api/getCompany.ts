import { getCompanies } from "./getCompanies"

export const getCompany = async (id: string | null) => {
  const companies = await getCompanies();
  const company = companies.find((company) => company.id === id);
  return company;
};