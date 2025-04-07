import { Result } from "../types/pokemon.type";

export default function filteredForUndefined(arr: Result[]) {
  return arr?.filter((item) => item.name !== "undefined");
}
