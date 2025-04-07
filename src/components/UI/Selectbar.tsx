"use client";

import { ListItem } from "@/libs/types/pokemon.type";

export type SelectbarParams = {
  handleChange: (value: string) => string;
  options: ListItem[];
  value: string;
};

export default function SelectBar({
  handleChange,
  options = [],
  value,
}: Readonly<SelectbarParams>) {
  return (
    <div className="flex flex-row mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
      <select
        id="countries"
        value={value ?? ''}
        className="bg-gray-100 border-0 border-(--color-blue-custom) text-gray-600 text-sm rounded min-h-12 w-full px-3 py-2 m-auto outline-0"
        onChange={(e) => {
          e.preventDefault();
          handleChange(e.target.value);
        }}
      >
        {options?.map((option) => (
          <option value={option.value} key={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
