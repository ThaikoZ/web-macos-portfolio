import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import DropdownGroup, { DropdownGroupContext } from "./DropdownGroup";
import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuContent from "./DropdownMenuContent";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownMenuSeparator from "./DropdownMenuSeparator";
import SearchInput from "../SearchInput";

interface DropdownContextInterface {
  isOpen: boolean;
  toggle: () => void;
  ref: React.RefObject<HTMLUListElement>;
  close: () => void;
}

export const DropdownContext = createContext<
  DropdownContextInterface | undefined
>(undefined);

const Dropdown = ({
  id = "dropdown1",
  children,
}: PropsWithChildren<{ id?: string }>) => {
  const dropdownGroupContext = useContext(DropdownGroupContext);
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  const isOpen = dropdownGroupContext
    ? dropdownGroupContext.activeDropdown === id
    : localIsOpen;

  const toggle = () => {
    if (dropdownGroupContext) {
      dropdownGroupContext.setActiveDropdown(isOpen ? null : id!);
    } else {
      setLocalIsOpen((prev) => !prev);
    }
  };

  const close = () => {
    if (dropdownGroupContext) {
      dropdownGroupContext.setActiveDropdown(null);
    } else {
      setLocalIsOpen(false);
    }
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, ref, close }}>
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Content = DropdownMenuContent;
Dropdown.MenuItem = DropdownMenuItem;
Dropdown.MenuSeparator = DropdownMenuSeparator;
Dropdown.MenuSearchBox = SearchInput;
Dropdown.Group = DropdownGroup;

export { Dropdown };
