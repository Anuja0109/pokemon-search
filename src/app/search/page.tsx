import { redirect } from "next/navigation";
import { Suspense } from "react";
import PokemonList from "@/components/PokemonList";
import PokemonSearch from "@/components/PokemonSearch";
import PokemonTypeSelect from "@/components/PokemonTypeSelect";
import { getAllPokemons, getPokemonsByType } from "@/libs/api/apiFunctions";
import mockPokemonSearchFilterApi from "@/libs/api/mockPokemonSearchApi";
import Loading from "../loading";
import { ResultsMOckApi } from "@/libs/types/pokemon.type";


interface SearchPageProps {
  searchParams: Promise<{
    pokemonType?: string;
    term?: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function Search({
  searchParams,
}: Readonly<SearchPageProps>) {
  const { pokemonType, term } = await searchParams;

  if (!term && !pokemonType) {
    redirect("/");
  }

  function getResultsForSearchOrTypeFilter(): () => Promise<ResultsMOckApi> {
    if (term && pokemonType) {
      return () => mockPokemonSearchFilterApi({ term, apiFunc: () => getPokemonsByType(pokemonType), forCase: 'all' });
    } else if (!term && pokemonType) {
      return () => mockPokemonSearchFilterApi({ apiFunc: () => getPokemonsByType(pokemonType), forCase: 'type' });
    } else if (!pokemonType && term) {
      return () => mockPokemonSearchFilterApi({ term, apiFunc: () => getAllPokemons(), forCase: 'search' })
    }
    else {
      return () => mockPokemonSearchFilterApi({ term, apiFunc: () => getAllPokemons(), forCase: '' })
    }

  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] flex-1 items-center justify-items-center pt-2 px-8 pb-20 gap-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <article className="flex w-full flex-wrap mb-6 md:mb-1 md:flex-nowrap gap-4">
          <Suspense fallback={<Loading />}>
            <PokemonSearch />
            <PokemonTypeSelect />
          </Suspense>
        </article>
        <article className="flex w-full flex-wrap mb-6 md:mb-2 gap-4">
          <Suspense fallback={<Loading />}>
            <PokemonList fetchData={getResultsForSearchOrTypeFilter()} />
          </Suspense>
        </article>
      </main>
    </div>
  );
}
