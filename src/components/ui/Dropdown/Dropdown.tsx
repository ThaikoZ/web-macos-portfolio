import clsx from "clsx";
import { cloneElement, ReactElement, useEffect, useRef, useState } from "react";
import { DropdownItemInterface } from "../../../types/dropdown";
import SearchInput from "../SearchInput";
import Separator from "../Separator";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface Props {
  trigger: ReactElement;
  menu: DropdownItemInterface[];
  direction?: "right" | "bottom";
}

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const Dropdown = ({ trigger, menu, direction = "bottom" }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

  useOutsideClick(dropdownRef, () => setOpen(false));

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const dropdownMenuClasses = clsx({
    "top-full left-0": direction === "bottom",
    "top-0 left-full bg-opacity-100": direction === "right" && !darkMode,
    "top-0 left-full bg-opacity-[80%] bg-gray-900":
      direction === "right" && darkMode,
  });

  return (
    <div
      className="h-full relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cloneElement(trigger)}
      {open && (
        <DropdownMenu className={dropdownMenuClasses}>
          {menu.map((item, index) => {
            switch (item.id) {
              case "help_search_input":
                return <SearchInput key={index} onSearch={handleSearch} />;
              case "separator":
                return <Separator key={index} />;
            }
            const dropdownItem = (
              <DropdownItem
                key={index}
                className={
                  index > 0 &&
                  menu[index - 1].id !== "separator" &&
                  menu[index - 1].id !== "help_search_input"
                    ? "mt-[-2px]"
                    : ""
                }
                item={item}
                setOpen={setOpen}
              />
            );
            return item.submenu && item.submenu.length > 0 ? (
              <Dropdown
                key={index}
                direction="right"
                trigger={dropdownItem}
                menu={item.submenu}
              />
            ) : (
              dropdownItem
            );
          })}
        </DropdownMenu>
      )}
    </div>
  );
};

export default Dropdown;
