import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Separator from "./Separator";
import Shortcut from "./Shortcut";
import Badge from "./Badge";
import { forwardRef } from "react";
import {
  DropdownItemInterface,
  DropdownMenuInterface,
} from "../../types/dropdown";
import { cn } from "../../lib/utils";
import { ChevronRightIcon } from "../../assets/icons/utility";

export interface DropdownProps {
  trigger: ReactNode;
  menu: DropdownMenuInterface;
  className?: string;
  onOpenChange?: (isOpen: boolean) => void;
}

export interface DropdownMenuItemProps {
  item: DropdownItemInterface;
}

interface DropdownMenuSelectorProps {
  item: DropdownItemInterface;
  className?: string;
}

const DropdownMenuSelector = ({
  item,
  className,
}: DropdownMenuSelectorProps) => {
  switch (item.id) {
    case "separator":
      return <Separator />;
    case "title":
      return (
        <DropdownMenu.DropdownMenuLabel
          className={cn(
            item.className,
            "px-[0.75rem] py-[0.15rem] mt-2 first-of-type:mt-0 text-sm text-topbar-dropdown-title"
          )}
        >
          {item.title}
        </DropdownMenu.DropdownMenuLabel>
      );
    case "submenu":
      return (
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="group select-none outline-none data-[state=open]:bg-topbar-dropdown-sub-active rounded-md data-[disabled]:pointer-events-none">
            <DropdownMenuItem item={item} />
          </DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent className={className}>
              {item.submenu?.map((subItem, index) => (
                <DropdownMenuSelector key={index} item={subItem} />
              ))}
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>
      );
    default:
      return (
        <DropdownMenu.Item
          className="outline-none"
          disabled={item.inactive || item.disabled}
        >
          <DropdownMenuItem item={item} />
        </DropdownMenu.Item>
      );
  }
};

export const Dropdown = (props: DropdownProps) => {
  const dropdownClass = cn(props.className, "dropdown-menu");

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
            <DropdownMenuSelector
              key={index}
              item={item}
              className={dropdownClass}
            />
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
  const disabled = item.inactive || item.disabled;

  const handleOnClick = () => {
    if (!disabled) {
      if (item.func) item.func();
      else console.log(item.id);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleOnClick}
      className={cn(
        item.className,
        "group px-[0.75rem] py-[0.15rem] rounded-md flex justify-between items-center gap-12",
        {
          "hover:bg-topbar-dropdown-sub-item-hovered hover:text-topbar-dropdown-sub-item-hovered-text":
            !disabled && !item.variant,
        },
        {
          "dark:hover:bg-white dark:hover:bg-opacity-20 hover:bg-black hover:bg-opacity-15 text-topbar-dropdown-text":
            item.variant == "secondary",
        }
      )}
    >
      <div className="flex gap-2 items-center">
        {item.icon && <img src={item.icon} width="20px" />}
        <span
          className={cn({
            "text-topbar-dropdown-text-inactive": item.inactive,
          })}
        >
          {item.title}
        </span>
      </div>
      {item.shortcut && (
        <Shortcut
          shortcut={item.shortcut}
          className={cn(
            "font-medium",
            {
              "group-hover:text-topbar-dropdown-shortcut-text-hovered":
                !disabled,
            },
            { "": item.inactive }
          )}
        />
      )}
      {item.badge && <Badge label={item.badge} />}
      {item.submenu && (
        <ChevronRightIcon
          className={cn(
            "group-hover:fill-topbar-dropdown-sub-chevron-text-hovered",
            { "text-topbar-dropdown-text-inactive": disabled }
          )}
        />
      )}
    </div>
  );
});

export default Dropdown;
