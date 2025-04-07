import { getPokemonData } from "../api/apiFunctions";
import {
  PokemonData,
  PokemonDataApiRes,
  PokemonListApiRes,
} from "../types/pokemon.type";

const getPokemonImgUrl = (name: string) => {
  return getPokemonData(name)
    .then((res: PokemonListApiRes | PokemonDataApiRes) => {
      if (res.error) {
        return res.error;
      }
      const { sprites } = res as PokemonData ;
      return sprites?.front_shiny;
    })
    .catch((err) => {
      if (err instanceof Error) {
        return err;
      }
    });
};

export default getPokemonImgUrl;
