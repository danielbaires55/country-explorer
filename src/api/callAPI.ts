import { apiUrl } from "./utils";
import { CountryType } from "../types/countriesType";
import { CardType } from "../types/cardType";
import { DetailType } from "../types/detailType";
// chiamo l'API e restituisco i dati
const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
        }

        return await response.json();
    } catch (error: any) {
        console.error(`Error fetching from API: ${url}`, error.message);
        return null; // Restituisci null in caso di errore
    }
};

// Funzione per ottenere i paesi, mappandoli al formato desiderato
export const getCountries = async (): Promise<CardType[]> => {
    const endpoint = "/all";
    const apiData = await fetchData(apiUrl(endpoint)); // Usa fetchData per chiamare l'API

    if (!apiData || !Array.isArray(apiData)) {
        console.error("Invalid API response or no countries found");
        return []; // Ritorna un array vuoto in caso di errore o risposta non valida
    }

    // Mappa i dati ricevuti nel formato desiderato
    return apiData.map((country: CountryType) => ({
        name: country.name.common,
        flag: country.flags.svg,
        region: country.region,
        population: country.population,
    }));
};


// Funzione di chiamata API generica
export const callApi = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Errore nella richiesta all'API");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Errore nel recupero dei dati:", error.message);
    throw error;
  }
};

// Funzione per ottenere i dettagli di un paese tramite il nome
export const getCountryDetails = async (countryName: string): Promise<DetailType> => {
  try {
    const url = `${apiUrl}/name/${countryName}`;
    const data = await callApi(url);
    return data[0]; // La risposta dell'API è un array, quindi prendiamo il primo elemento
  } catch (error) {
    console.error("Errore nel recupero dei dettagli del paese:");
    throw error;
  }
};
