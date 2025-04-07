import { Result } from "../types/pokemon.type";
import filteredForUndefined from "./filterForUndefined";
import getNameKeyValuesFromApiResults from "./getEntityNameFromApiRes";

export default function normalizeResArr(arr: Result[]) {
  const withoutUndefined = filteredForUndefined(arr);
  return getNameKeyValuesFromApiResults(withoutUndefined);
}
