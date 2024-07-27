import { cloneElement, ReactElement, useEffect, useRef, useState } from "react";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import Separator from "../Separator";
import { DropdownItemInterface } from "../../../types/dropdown";

interface Props {
  trigger: ReactElement;
  menu: DropdownItemInterface[];
}

const Dropdown = ({ trigger, menu }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(!open);
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

  return (
    <div className="h-full relative " ref={dropdownRef}>
      {cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open && (
        <DropdownMenu>
          {menu.map((item, index) =>
            item.id !== "separator" ? (
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
