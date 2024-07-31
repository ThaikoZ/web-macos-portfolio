import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DropdownMenuInterface, DropdownItemInterface } from "@/types/Dropdown";
import { cn } from "@/lib/utils";
import Separator from "./Separator";
import { ChevronRightIcon } from "@/assets/icons/utility";
import Shortcut from "./Shortcut";
import Badge from "./Badge";
import { forwardRef } from "react";

export interface DropdownProps {
  trigger: ReactNode;
  menu: DropdownMenuInterface;
}

export interface DropdownMenuItemProps {
  item: DropdownItemInterface;
}

const dropdownClass = cn(
  "p-[0.3rem] rounded-lg shadow-window h-fit w-max z-10 border-[1px] border-opacity-[12%] border-black font-[500]",
  "bg-dropdown-light-background bg-opacity-60 text-light-text",
  "backdrop-brightness-200 dark:bg-dropdown-dark-background dark:bg-opacity-60 dark:text-dark-text",
  "backdrop-blur-lg"
);

const getComponent = (item: DropdownItemInterface) => {
  switch (item.id) {
    case "separator":
      return <Separator />;
    case "submenu":
      return (
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="group select-none outline-none data-[state=open]:bg-dropdown-light-separator data-[state=open]:dark:bg-dropdown-dark-separator data-[state=open]:bg-opacity-15 data-[state=open]:dark:bg-opacity-30 data-[state=open]:rounded-md data-[disabled]:pointer-events-none">
            <DropdownMenuItem item={item} />
          </DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent className={cn(dropdownClass, "")}>
              {item.submenu?.map((subItem, index) => (
                <div key={index}>{getComponent(subItem)}</div>
              ))}
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>
      );
    default:
      return (
        <DropdownMenu.Item className="outline-none" disabled={item.inactive}>
          <DropdownMenuItem item={item} />
        </DropdownMenu.Item>
      );
  }
};

export const Dropdown = (props: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="h-full">{props.trigger}</div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          side="bottom"
          className={dropdownClass}
        >
          {props.menu.items.map((item, index) => (
            <div key={index}>{getComponent(item)}</div>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(({ item }, ref) => {
  const handleOnClick = () => {
    if (!(item.inactive || item.disabled)) {
      if (item.func) item.func();
      else console.log(item.id);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleOnClick}
      className={cn(
        "group px-[0.75rem] py-[0.15rem] rounded-md flex justify-between items-center gap-12",
        {
          "hover:bg-light-blue dark:hover:bg-dark-dark-blue hover:text-white":
            !(item.disabled || item.inactive),
        }
      )}
    >
      <div className="flex gap-2 items-center">
        {item.icon && <img src={item.icon} width="20px" />}
        <span className={cn({ "opacity-40": item.inactive })}>
          {item.title}
        </span>
      </div>
      {item.shortcut && (
        <Shortcut
          shortcut={item.shortcut}
          className={cn({
            "group-hover:text-white group-hover:opacity-100": !(
              item.disabled || item.inactive
            ),
          })}
        />
      )}
      {item.badge && <Badge label={item.badge} />}
      {item.submenu && (
        <ChevronRightIcon
          className={cn("fill-black", { "opacity-40": item.inactive })}
        />
      )}
    </div>
  );
});

export default Dropdown;
