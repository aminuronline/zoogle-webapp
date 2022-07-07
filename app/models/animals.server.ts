import { matchSorter } from "match-sorter";
import { animalsData } from "../data/animals";

export const getAnimals = (query: string) => {
  if (!query) return [];
  const results = matchSorter(animalsData, query, {
    threshold: matchSorter.rankings.CONTAINS,
    keys: ["name", "animal_type"],
  });
  return results;
};
