"use client";
import { useCallback } from "react";
import { useSearchParams, redirect } from "next/navigation";
import Searchbar from "../UI/Searchbar";

export default function PokemonSearch() {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <Searchbar
      defaultV={searchParams.get("term") ?? ""}
      handleSearchSubmit={(value) => {
        redirect(`/search?${createQueryString("term", value)}`);
      }}
    />
  );
}
