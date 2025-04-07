"use client";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search.svg";
import { useEffect, useState } from "react";

export type SearchbarParams = {
  handleSearchSubmit: (value: string) => string;
  defaultV: NonNullable<string>;
};

export default function Searchbar({
  handleSearchSubmit,
  defaultV,
}: Readonly<SearchbarParams>) {
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    setSearchVal(defaultV);
  }, [defaultV]);

  return (
    <form className="flex flex-row mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
      <span className="flex items-center bg-gray-100 rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
        <Image src={SearchIcon} alt="maginying-glass" width={25} height={25} />
      </span>
      <input
        required
        className="flex items-center max-w-xs border-0 border-(--color-blue-custom) bg-gray-100 rounded rounded-r-none rounded-l-none min-h-3 w-full py-1 px-2 outline-0"
        value={searchVal ?? ""}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button
        className="flex items-center max-w-sm bg-(--color-blue-custom) transition-all bg-gradient-to-b hover:from-(--primary-text) from-(--color-blue-custom) to-(--color-blue-custom) text-(--color-primary-text) font-bold py-3 px-6 rounded rounded-l-none"
        onClick={() => handleSearchSubmit(searchVal)}
      >
        Search
      </button>
    </form>
  );
}
