import axios from 'axios';
import { Country } from '../types/country';

const API_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async (): Promise<Country[]> => {
  const { data } = await axios.get(`${API_URL}/all`);
  return data;
};

export const fetchCountryByName = async (name: string): Promise<Country> => {
  const { data } = await axios.get(`${API_URL}/name/${name}`);
  return data[0];
};

export const fetchCountryNamesByCodes = async (
  codes: string[]
): Promise<string[]> => {
  if (!codes.length) return [];
  const { data } = await axios.get(`${API_URL}/alpha`, {
    params: { codes: codes.join(',') },
  });
  return data.map((country: Country) => country.name.common);
};
