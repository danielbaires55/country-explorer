const BASE_URL = import.meta.env.VITE_BASE_URL;
import type { CountryType } from "../types/countryTypes";

const callApi = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
