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
