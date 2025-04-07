import PokemonDetails from "@/components/PokemonDetails";
import { getAllPokemons, getPokemonData } from "@/libs/api/apiFunctions";
import { ListItem, PokemonListApiRes } from "@/libs/types/pokemon.type";
import normalizeResArr from "@/libs/utils/normalizeResArray";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const { results } = await getAllPokemons() as PokemonListApiRes;
  const pokemonsList: ListItem[] = results ? normalizeResArr(results) : [];

  return pokemonsList.map(pokemon => ({
    slug: pokemon.value,
  }));
}

export default async function PokemonDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params;
  return <section className="grid grid-rows-[20px_1fr_20px] flex-1 items-center justify-items-center pt-2 px-8 pb-20 gap-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
      <article className="flex w-full flex-wrap mb-6 md:mb-2 gap-0">
        <PokemonDetails fetchPokemon={() => getPokemonData(slug)} />
      </article>
    </main>
  </section>;
}
