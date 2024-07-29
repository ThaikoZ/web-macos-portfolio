import { useContext } from "react";
import { Dropdown, DropdownContext } from "./Dropdown";
import { DropdownMenuItemProps } from "./DropdownMenuItem";
import DropdownHeader from "./DropdownHeader";
import Shortcut from "../Shortcut";

const DropdownMenuContent = ({ item }: DropdownMenuItemProps) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown");
  }

  if (item.submenu) return null;

  switch (item.id) {
    case "title-1":
    case "title-2":
      return (
        <div className="flex gap-32 pe-3">
          <DropdownHeader h={item.id}>{item.title}</DropdownHeader>
          {item.shortcut && <Shortcut shortcut={item.shortcut} />}
        </div>
      );
    // case "help_search_input":
    //   return <Dropdown.MenuSearchBox />;
    case "separator":
      return <Dropdown.MenuSeparator />;
    default:
      return <Dropdown.MenuItem item={item} className={item.className} />;
  }
};

export default DropdownMenuContent;
