const baseUrl = import.meta.env.VITE_BASE_URL;

// Array di risorse consentite
const validApiUrlResources = ["/all"];
const validDetailUrlResources = ["/name"];

// Funzione per creare URL di base per chiamate API generiche
export const apiUrl = (apiResource: string): string => {
  // Verifica che la risorsa sia valida
  if (!validApiUrlResources.includes(apiResource)) {
    throw new Error(`Risorsa API non valida: ${apiResource}`);
  }
  // Restituisce l'URL completo
  return `${baseUrl}${apiResource}`;
};

// Funzione per creare URL per i dettagli di un paese
export const detailUrl = (apiResource: string, countryName: string): string => {
  // Verifica che la risorsa sia valida per dettagli
  if (!validDetailUrlResources.includes(apiResource)) {
    throw new Error(`Risorsa API non valida per dettagli: ${apiResource}`);
  }
  // Restituisce l'URL completo per il dettaglio del paese
  return `${baseUrl}${apiResource}/${countryName}`;
};
