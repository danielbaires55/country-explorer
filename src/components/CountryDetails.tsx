import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VStack, Spinner, Text, Image } from "@chakra-ui/react";
import { getCountryDetails } from "../api/callAPI";
import { DetailType } from "../types/detailType";

export const CountryDetail = () => {
  // Recupera il parametro 'name' dalla URL
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<DetailType | null>(null);
  const [loading, setLoading] = useState(true);

  // Esegui il fetch dei dettagli del paese all'interno dell'useEffect
  useEffect(() => {
    const fetchCountryDetails = async () => {
      if (!name) return; // Se non c'è un nome, esce

      try {
        setLoading(true);
        const data = await getCountryDetails(name); // Chiamata API per il paese
        setCountry(data); // Imposta il paese trovato
      } catch (error) {
        console.error("Errore nel recupero dei dettagli del paese:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [name]);

  // Mostra un loader mentre i dati sono in fase di caricamento
  if (loading) {
    return <Spinner size="xl" margin="auto" />;
  }

  // Se non viene trovato il paese, mostra un messaggio di errore
  if (!country) {
    return <Text color="red.500">Paese non trovato!</Text>;
  }

  return (
    <VStack align="start" p={6}>
      <Text fontSize="2xl" fontWeight="bold">
        {country.name.common}
      </Text>
      <Image
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        boxSize="200px"
        objectFit="contain"
        mx="auto"
      />
      <Text>
        <strong>Region:</strong> {country.region}
      </Text>
      <Text>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </Text>
      <Text>
        <strong>Capital:</strong> {country.capital?.join(", ")}
      </Text>
      <Text>
        <strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}
      </Text>
      <Text>
        <strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}
      </Text>
      <Text>
        <strong>Timezones:</strong> {country.timezones.join(", ")}
      </Text>
    </VStack>
  );
};
