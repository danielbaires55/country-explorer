export type DetailType = {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital?: string[];
  population: number;
  region: string;
  subregion?: string;
  flags: {
    svg: string;
    png: string;
  };
  languages?: { [key: string]: string };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  area: number;
  borders?: string[];
  timezones: string[];
};