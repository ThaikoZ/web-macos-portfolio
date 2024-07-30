import { ChevronRightIcon } from "@/assets/icons/utility";
import { cn } from "@/lib/utils";
import { DropdownItemInterface } from "@/types/Dropdown";
import Shortcut from "./Shortcut";
import Badge from "./Badge";
import { forwardRef } from "react";

export interface DropdownMenuItemProps {
  item: DropdownItemInterface;
}

const DropdownMenuItem = forwardRef<HTMLLIElement, DropdownMenuItemProps>(
  ({ item }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          "dropdown-menu-item relative group px-[0.75rem] py-[0.15rem] rounded-md flex justify-between items-center gap-12",
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
        {item.submenu && <ChevronRightIcon />}
      </li>
    );
  }
);

export default DropdownMenuItem;
