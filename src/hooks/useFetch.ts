import { PokemonDataApiRes, PokemonListApiRes, PokemonListRes } from "@/libs/types/pokemon.type";
import { useState, useEffect } from "react";

export type TApiResponse = {
  data: PokemonListRes | undefined;
  error: Error | undefined;
  loading: boolean;
};

export default function useFetch(
  apiFunc: () => Promise<PokemonListApiRes | PokemonDataApiRes>
): TApiResponse {
  const [data, setData] = useState<PokemonListRes>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await apiFunc() as PokemonListApiRes;
      setData(apiResponse);
    } catch (err) {
      if (err instanceof Error) setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { data, error, loading };
}
