import { useState, ChangeEvent, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const SearchInput = ({
  placeholder = "Search",
  onSearch,
}: PropsWithChildren<{
  placeholder?: string;
  onSearch?: (query: string) => void;
}>) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="relative mb-1">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        autoFocus
        className={cn(
          "w-full px-[1rem] py-[0.25rem] rounded-md cursor-text bg-opacity-10 backdrop-blur-md",
          "dark:focus:outline-none focus:ring-[1px] dark:bg-white dark:focus:ring-white",
          "focus:outline-none bg-black "
        )}
      />
      {query && (
        <div
          onClick={handleClear}
          className="flex absolute justify-center items-center right-2.5 top-[0.45rem] bottom-1 h-4 w-4 focus:outline-none text-black font-bold rounded-full bg-white transition-all active:bg-black active:text-white cursor-pointer selection:bg-gray-300"
        >
          &times;
        </div>
      )}
    </div>
  );
};

export default SearchInput;
