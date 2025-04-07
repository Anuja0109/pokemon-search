import { POKEMON_IMAGES_URL } from "../constants/pokemon";

export default function getPokemonIdImgUrlOther(name: string): string {
  return `${POKEMON_IMAGES_URL}/${name}.jpg`;
}
