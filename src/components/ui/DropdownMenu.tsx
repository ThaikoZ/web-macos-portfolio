import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DropdownItemInterface, DropdownMenuInterface } from "@/types/Dropdown";
import DropdownMenuItem from "./DropdownMenuItem";
import { cn } from "@/lib/utils";
import Separator from "./Separator";

export interface Props {
  trigger: ReactNode;
  menu: DropdownMenuInterface;
}

const dropdownClass = cn(
  "absolute left-0 p-[0.3rem] rounded-lg shadow-window h-fit w-max z-10 border-[1px] border-opacity-[12%] border-black font-[500]",
  "bg-dropdown-light-background bg-opacity-60 text-light-text",
  "dark:bg-dropdown-dark-background dark:bg-opacity-60 dark:text-dark-text backdrop-brightness-200",
  "backdrop-blur-lg"
);

const getComponent = (item: DropdownItemInterface) => {
  switch (item.id) {
    case "separator":
      return <Separator />;
    case "submenu":
      return (
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="group select-none outline-none  data-[state=open]:bg-dropdown-light-separator data-[state=open]:dark:bg-dropdown-dark-separator data-[state=open]:bg-opacity-15 data-[state=open]:dark:bg-opacity-30 data-[state=open]:rounded-md data-[disabled]:pointer-events-none">
            <DropdownMenu.Item asChild>
              <DropdownMenuItem item={item} />
            </DropdownMenu.Item>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent className={cn(dropdownClass, "h-fit")}>
              {item.submenu?.map((subItem, index) => (
                <div key={index}>{getComponent(subItem)}</div>
              ))}
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>
      );
    default:
      return (
        <DropdownMenu.Item className="outline-none">
          <DropdownMenuItem item={item} />
        </DropdownMenu.Item>
      );
  }
};

export const Dropdown = (props: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none h-full cursor-default">
        {props.trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="start" className={dropdownClass}>
          {props.menu.items.map((item, index) => (
            <span key={index}>{getComponent(item)}</span>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
