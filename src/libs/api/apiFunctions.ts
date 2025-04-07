import pokemonSearchApiService from "./service";

export function getAllPokemons() {
  return pokemonSearchApiService({
    urlEndPoint: `/pokemon?limit=-1`,
    method: "GET",
  });
}

export function getAllPokemonTypes() {
  return pokemonSearchApiService({
    urlEndPoint: `/type?limit=-1`,
    method: "GET",
  });
}

export function getPokemonsByType(type: string) {
  return pokemonSearchApiService({
    urlEndPoint: `/type/${type}`,
    method: "GET",
  });
}

export function getPokemonData(name: string) {
  return pokemonSearchApiService({
    urlEndPoint: `/pokemon/${name}`,
    method: "GET",
  });
}
