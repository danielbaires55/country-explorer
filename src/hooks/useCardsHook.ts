import { CardType } from "../types/cardType";
import { useEffect, useState } from "react";

export const useFetchCards = (fetchCards: () => Promise<CardType[]>) => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const fetchedCards = await fetchCards();
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    loadCards();
  }, [fetchCards]);

  return cards;
};
