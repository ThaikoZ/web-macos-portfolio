import { useContext } from "react";
import { Dropdown, DropdownContext } from "./Dropdown";
import { DropdownMenuItemProps } from "./DropdownMenuItem";

const DropdownMenuContent = ({ item }: DropdownMenuItemProps) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown");
  }

  if (item.submenu) return null;

  switch (item.id) {
    case "separator":
      return <Dropdown.MenuSeparator />;
    default:
      return <Dropdown.MenuItem item={item} />;
  }
};

export default DropdownMenuContent;
