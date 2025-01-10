import { CardType } from "../types/cardType";
import { SimpleGrid } from "@chakra-ui/react";
import { useFetchCards } from "../hooks/useCardsHook";
import { CountryCard } from "./CountryCard";

type CountryListProps = {
  getData: () => Promise<CardType[]>
};


export const CountryList = ( {getData}:CountryListProps) => {

  const content = useFetchCards(getData);

  return (
    <>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} gap={10} margin={10} mt={20}>
        {content.map((card) => (
          <CountryCard key={card.name} content={card} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CountryList