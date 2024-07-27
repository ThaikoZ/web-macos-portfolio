import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { DropdownItemInterface } from "../../../types/dropdown";
import Shortcut from "../Shortcut";

interface Props {
  item: DropdownItemInterface;
  className?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownItem = ({ item, className, setOpen }: Props) => {
  return (
    <li
      className={clsx(
        className,
        "px-[1rem] py-[0.25rem] rounded-md cursor-pointer transition-colors",
        "hover:bg-macos-blue-500 hover:text-white flex justify-between gap-14"
      )}
      onClick={(e) => {
        e.preventDefault();
        setOpen(false);
        item.func ? item.func() : () => {};
      }}
    >
      {item.title}
      {item.shortcut && <Shortcut shortcut={item.shortcut} />}
    </li>
  );
};

export default DropdownItem;
