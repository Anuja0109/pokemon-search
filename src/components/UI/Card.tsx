import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/assets/icons/arrowright.svg";
import { ListItem } from "@/libs/types/pokemon.type";
import getPokemonIdImgUrlOther from "@/libs/utils/getPokemonIdFromUrl";


export default async function Card({ listItem }: Readonly<{ listItem: ListItem }>) {
  const itemImageSrc = getPokemonIdImgUrlOther(listItem.value);
  return (
    <div
      className="max-w-sm bg-gray-100 border-gray-200 rounded shadow-sm border-0 outline-0 m-auto"
      key={listItem.key}
    >
      <div className="flex w-full h-[200px]">
        <Image
          src={itemImageSrc}
          alt={`${listItem.key}-image`}
          width={300}
          height={167}
          className="p-4"
          loading="lazy"
        />
      </div>
      <div className="p-3 w-full min-h-8">
        <h5 className="text-(--color-blue-custom) px-3 py-2 text-lg font-bold text-left capitalize">{listItem.value}</h5>
        <Link
          href={`/pokemon/${listItem.value}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-(--color-blue-text) gap-1 hover:font-bold"
        >
          Details
          <Image
            src={ArrowRight}
            alt="arrow-right-icon"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </div>
  );
}
