import { PokemonData } from "@/libs/types/pokemon.type";
import getPokemonIdImgUrlOther from "@/libs/utils/getPokemonIdFromUrl";
import Image from "next/image";

type TDetailsCardProps = {
  pokemon: PokemonData;
};

export default function DetailsCard({ pokemon }: Readonly<TDetailsCardProps>) {
  return (
    <div className="flex flex-col gap-0 max-h-[600px] max-w-[390px] p-1 rounded-1 border-0 mx-auto my-0">
      <Image
        src={getPokemonIdImgUrlOther(pokemon.name)}
        alt={`${pokemon.name}-image`}
        width={400}
        height={300}
        className="rounded-1"
      />

      <ul className="flex flex-col p-4 flex-wrap bg-amber-500 max-w-[400px]">
        <li className="p-1">
          <strong>Name:</strong>{" "}
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </li>
        <li className="p-1">
          <strong>Type:</strong>{" "}
          {pokemon?.types?.map((type) => type.type.name).join(", ")}
        </li>
        <li className="p-1">
          <strong>Stats:</strong>{" "}
          {pokemon?.stats?.map((stat) => stat.stat.name).join(", ")}
        </li>
        <li className="p-1">
          <strong>Abilities:</strong>{" "}
          {pokemon.abilities
            .slice(0, 5)
            .map((ability) => ability.ability.name)
            .join(", ")}
        </li>
        <li className="p-1">
          <strong>Some Moves:</strong>{" "}
          {pokemon.moves
            .slice(0, 5)
            .map((move) => move.move.name)
            .join(", ")}
        </li>
      </ul>
    </div>
  );
}
