import { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import clsx from "clsx";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchInput = ({
  placeholder = "Search",
  onSearch,
}: SearchInputProps) => {
  const [query, setQuery] = useState<string>("");
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

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
        className={clsx(
          "w-full px-[1rem] py-[0.25rem] rounded-md cursor-text bg-opacity-10 backdrop-blur-md",
          {
            "focus:outline-none focus:ring-[1px] bg-white focus:ring-white":
              darkMode,
          },
          { "focus:outline-none   bg-black ": !darkMode }
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
