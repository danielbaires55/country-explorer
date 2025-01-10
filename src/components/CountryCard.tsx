import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CardType } from "../types/cardType";

// Componente CountryCard
type CountryCardProps = {
  content: CardType;
};

export const CountryCard = ({ content }: CountryCardProps) => {
  return (
    <Link to={`/country/${content.name.toLowerCase()}`}>
      <Box
        borderWidth={1}
        borderRadius="md"
        overflow="hidden"
        p={4}
        textAlign="center"
        transition="transform 0.2s, box-shadow 0.2s"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "lg",
          borderColor: "blue.400",
        }}
      >
        {/* Bandiera del paese */}
        <Image
          src={content.flag}
          alt={`Flag of ${content.name}`}
          boxSize="100px"
          maxWidth="100%"
          maxHeight="100px"
          objectFit="contain"
          mx="auto"
        />
        {/* Nome del paese */}
        <Text mt={2} fontWeight="bold">
          {content.name}
        </Text>
      </Box>
    </Link>
  );
};

// Grid di CountryCard
type CountryGridProps = {
  countries: CardType[];
};

export const CountryGrid = ({ countries }: CountryGridProps) => {
  return (
    <SimpleGrid columns={5}  p={4}>
      {countries.map((country, index) => (
        <CountryCard key={index} content={country} />
      ))}
    </SimpleGrid>
  );
};
