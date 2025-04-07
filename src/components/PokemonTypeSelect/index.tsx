"use client";
import { useCallback } from "react";
import { useSearchParams, redirect } from "next/navigation";
import useFetch, { TApiResponse } from "@/hooks/useFetch";
import { getAllPokemonTypes } from "@/libs/api/apiFunctions";
import SelectBar from "../UI/Selectbar";
import { ListItem } from "@/libs/types/pokemon.type";
import normalizeResArr from "@/libs/utils/normalizeResArray";

export default function PokemonTypeSelect() {
  const searchParams = useSearchParams();
  const { data, error }: TApiResponse = useFetch(getAllPokemonTypes);
  const pokemonTypeOptions: ListItem[] =
    data?.results && data?.results?.length > 0
      ? normalizeResArr([...data.results])
      : [{ key: "no", value: "no types found" }];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  if (error) {
    console.log({ error });
  }

  return (
    <SelectBar
      options={pokemonTypeOptions}
      value={searchParams.get("pokemonType") ?? ""}
      handleChange={(value) => {
        redirect(`/search?${createQueryString("pokemonType", value)}`);
      }}
    />
  );
}
