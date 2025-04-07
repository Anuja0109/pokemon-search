
export default function Header() {
  return (
    <header
      aria-label="pokemon-search-app-header"
      className="flex flex-row gap-1 bg-(--color-blue-custom) text-amber-50 sticky top-0 mx-auto my-0 p-1 min-h-16 w-full justify-center"
    >
      <div
        className="flex float-left text-(--color-logo) text-[2rem] font-bold m-auto p-1 font-stretch-75% font-loto whitespace-pre-wrap text-center"
        aria-label="header-brand-section"
      >
        Pokemon Search
      </div>
    </header>
  );
}
