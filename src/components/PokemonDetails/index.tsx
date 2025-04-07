import {
  PokemonData,
  PokemonDataApiRes,
  PokemonListApiRes,
} from "@/libs/types/pokemon.type";
import DetailsCard from "../UI/DetailsCard";

type TPokemonDetails = {
  fetchPokemon: () => Promise<PokemonListApiRes | PokemonDataApiRes>;
};

export default async function PokemonDetails({
  fetchPokemon,
}: Readonly<TPokemonDetails>) {
  const pokemonData = await fetchPokemon();

  const normalizePokemonData = (
    data: PokemonListApiRes | PokemonDataApiRes
  ): PokemonData => {
    if (!data) {
      throw new Error("Pokemon details cannot be fetched!");
    }

    const { types, name, stats, abilities, moves, id, sprites } =
      data as PokemonDataApiRes;

    return {
      types,
      name,
      stats,
      abilities,
      moves,
      id,
      sprites,
    };
  };
  return <DetailsCard pokemon={normalizePokemonData(pokemonData)} />;
}
