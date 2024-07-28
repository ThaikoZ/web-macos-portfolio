import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { DropdownItemInterface } from "../../../types/Dropdown";
import Shortcut from "../Shortcut";

interface Props {
  item: DropdownItemInterface;
  className?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownItem = ({ item, className, setOpen }: Props) => {
  return (
    <>
      <li
        className={clsx(
          className,
          "px-[1rem] py-[0.25rem] rounded-md transition-colors flex justify-between gap-14",
          { "hover:bg-macos-selection hover:text-white ": !item.inactive },
          { "text-gray-400": item.inactive }
        )}
        onClick={(e) => {
          e.preventDefault();
          setOpen(false);
          item.func ? item.func() : () => {};
        }}
      >
        <div className="flex gap-2 items-center">
          {item.icon && <img src={item.icon} width="20px" />}
          {item.title}
        </div>
        {item.shortcut && <Shortcut shortcut={item.shortcut} />}
        {item.submenu && <span>{">"}</span>}
      </li>
    </>
  );
};

export default DropdownItem;
