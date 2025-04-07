import { ListItem } from "@/libs/types/pokemon.type";
import Card from "./Card";

export default function List({ listData }: Readonly<{ listData: ListItem[] }>) {
  return <div className="flex flex-wrap gap-8 w-full max-w-full m-auto align-middle justify-center">
    {listData?.map((item: ListItem) => <Card listItem={item} key={item.key} />)}
  </div>
}