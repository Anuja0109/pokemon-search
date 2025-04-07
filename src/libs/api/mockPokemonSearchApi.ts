import {
  PokemonData,
  PokemonDataApiRes,
  PokemonListApiRes,
  PokemonListRes,
  Result,
  ResultsMOckApi,
} from "../types/pokemon.type";

type TMockPokemonSearchFilterApi = {
  term?: string;
  apiFunc: () => Promise<PokemonListApiRes | PokemonDataApiRes>;
  forCase: string;
};

export default function mockPokemonSearchFilterApi({
  term,
  apiFunc,
  forCase,
}: TMockPokemonSearchFilterApi): Promise<ResultsMOckApi> {
  return new Promise(function (resolve, reject) {
    apiFunc()
      .then((mockPokemonSearchFilterApiRes) => {
        const data: { results: Result[] } = { results: [] };
        if (forCase === "all" && term) {
          const { pokemon } =
            mockPokemonSearchFilterApiRes as unknown as PokemonData;
          const normalized = pokemon?.map(({ pokemon }) => ({
            ...pokemon,
          }));
          if (normalized && normalized?.length > 0) {
            data.results = normalized.filter((pokemon) =>
              pokemon.name?.includes(term)
            );
          }
        } else if (forCase === "type") {
          const { pokemon } =
            mockPokemonSearchFilterApiRes as unknown as PokemonData;
          if (pokemon && pokemon?.length > 0)
            data.results = pokemon.map(({ pokemon }) => ({ ...pokemon }));
        } else if (forCase === "search" && term) {
          const { results } =
            mockPokemonSearchFilterApiRes as unknown as PokemonListRes;
          if (results && results.length > 0)
            data.results = results.filter(({ name }) => name?.includes(term));
        } else {
          const { results } =
            mockPokemonSearchFilterApiRes as unknown as PokemonListRes;
          if (results && results.length > 0) data.results = results;
        }
        return resolve(data);
      })
      .catch((err) => {
        if (err instanceof Error) {
          return reject(err);
        }
      });
  });
}
