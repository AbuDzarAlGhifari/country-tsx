export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  capital: string[];
  borders?: string[];
  area: number;
  subregion: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  timezones;
  latlng;
  demonym;
  tld;
  gdp;
  government;
  anthem;
  climate;
}
