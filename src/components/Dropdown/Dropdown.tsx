import { cloneElement, ReactElement, useEffect, useRef, useState } from "react";
import DropdownItem from "./DropdownItem";

export interface DropdownItemInterface {
  id: string;
  title: string;
  href: string;
}

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

  const handleMenuItemClick = (id: string) => {
    console.log(id, "clicked");
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

  return (
    <div className="h-full relative " ref={dropdownRef}>
      {cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open && (
        <ul className="p-[0.25px] overflow-hidden absolute top-full rounded-md shadow-md drop-shadow-xl list-none bg-white w-56 z-10">
          {menu.map((item) => (
            <DropdownItem
              key={item.id}
              item={item}
              onClick={handleMenuItemClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
