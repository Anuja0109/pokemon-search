import { Suspense } from "react";
import { getAllPokemons } from "@/libs/api/apiFunctions";
import PokemonTypeSelect from "@/components/PokemonTypeSelect";
import PokemonList from "@/components/PokemonList";
import PokemonSearch from "@/components/PokemonSearch";
import mockPokemonSearchFilterApi from "@/libs/api/mockPokemonSearchApi";
import Loading from "./loading";

export default async function Home() {
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
            <PokemonList fetchData={() => mockPokemonSearchFilterApi({
              apiFunc: () => getAllPokemons(),
              forCase: ''
            })} />
          </Suspense>
        </article>
      </main>
    </div>
  );
}
