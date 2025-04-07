import List from "../UI/List";
import { ListItem, ResultsMOckApi } from "@/libs/types/pokemon.type";
import normalizeResArr from "@/libs/utils/normalizeResArray";

interface PostListProps {
  fetchData: () => Promise<ResultsMOckApi>;
}

export default async function PokemonList({ fetchData }: Readonly<PostListProps>) {
  const { results } = await fetchData() as ResultsMOckApi;
  const pokemonsList: ListItem[] = results ? normalizeResArr(results) : [];

  return <List listData={pokemonsList} />;
}
