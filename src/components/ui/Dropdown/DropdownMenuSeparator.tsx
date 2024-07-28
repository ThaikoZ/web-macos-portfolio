import { useContext } from "react";
import Separator from "../Separator";
import { DropdownContext } from "./Dropdown";

const DropdownMenuSeparator = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown");
  }

  return <Separator />;
};

export default DropdownMenuSeparator;
