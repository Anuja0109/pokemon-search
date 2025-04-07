import { POKEMON_API_BASE_URL } from "../constants/pokemon";
import { PokemonDataApiRes, PokemonListApiRes } from "../types/pokemon.type";

export type TPokemonServiceParams = {
  urlEndPoint: string;
  method: string;
  dataToPass?: Record<string, never>;
};

export default async function pokemonSearchApiService({
  urlEndPoint,
  method,
  dataToPass,
}: TPokemonServiceParams): Promise<PokemonListApiRes | PokemonDataApiRes> {
  return fetch(`${POKEMON_API_BASE_URL}${urlEndPoint}`, {
    method: method,
    ...(dataToPass && { body: JSON.stringify(dataToPass) }),
  })
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) {
        return { success: false, error: { message: err.message } };
      }
    });
}
