import { cloneElement, ReactElement, useEffect, useRef, useState } from "react";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import Separator from "../Separator";
import { DropdownItemInterface } from "../../../types/dropdown";
import clsx from "clsx";

interface Props {
  trigger: ReactElement;
  menu: DropdownItemInterface[];
  direction?: "right" | "bottom";
}

const Dropdown = ({ trigger, menu, direction = "bottom" }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownMenuClasses = clsx({
    "top-full left-0": direction === "bottom",
    "top-0 left-full": direction === "right",
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
          {menu.map((item, index) =>
            item.id !== "separator" ? (
              item.submenu ? (
                <Dropdown
                  key={index}
                  direction="right"
                  trigger={
                    <DropdownItem
                      className={
                        index > 0 && menu[index - 1].id !== "separator"
                          ? "mt-[-2px]"
                          : ""
                      }
                      item={item}
                      setOpen={setOpen}
                    />
                  }
                  menu={item.submenu}
                />
              ) : (
                <DropdownItem
                  key={index}
                  className={
                    index > 0 && menu[index - 1].id !== "separator"
                      ? "mt-[-2px]"
                      : ""
                  }
                  item={item}
                  setOpen={setOpen}
                />
              )
            ) : (
              <Separator key={index} />
            )
          )}
        </DropdownMenu>
      )}
    </div>
  );
};

export default Dropdown;
