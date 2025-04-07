import { Result, ListItem, GenericItem } from "../types/pokemon.type";

export default function getNameKeyValuesFromApiResults(
  results: Result[] | GenericItem[]
): ListItem[] {
  return results.map(({ name, url }) => ({
    key: name,
    value: name,
    url: url,
  }));
}
