import { ChevronRightIcon } from "@/assets/icons/utility";
import { cn } from "@/lib/utils";
import { DropdownItemInterface } from "@/types/Dropdown";
import React, { useContext, useState, useEffect } from "react";
import Badge from "../Badge";
import Shortcut from "../Shortcut";
import { DropdownContext } from "./Dropdown";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuContent from "./DropdownMenuContent";

export interface DropdownMenuItemProps {
  item: DropdownItemInterface;
}

const DropdownMenuItem = ({ item }: DropdownMenuItemProps) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown");
  }

  const { toggle, close } = context;
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const hasSubMenu = item.submenu && item.submenu.length > 0;

  const handleMouseEnter = () => {
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuOpen(false);
  };

  const handleOnToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!item.inactive) {
      if (item.func) item.func();
      else console.log("No action assigned to " + item.id);

      if (!hasSubMenu) {
        toggle();
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".dropdown-menu-item") &&
        !target.closest(".dropdown-menu")
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  return (
    <li
      className={cn(
        "dropdown-menu-item relative group px-[0.75rem] py-[0.15rem] rounded-md flex justify-between items-center gap-12",
        {
          "hover:bg-light-blue dark:hover:bg-dark-dark-blue hover:text-white":
            !item.inactive,
        }
      )}
      onClick={handleOnToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            "group-hover:text-white group-hover:opacity-100": !item.inactive,
          })}
        />
      )}
      {item.badge && <Badge label={item.badge} />}
      {item.submenu && <ChevronRightIcon />}
      {hasSubMenu && isSubmenuOpen && (
        <DropdownMenu
          className={cn(
            "absolute left-full top-0 mt-[-0.15rem]",
            "dark:bg-black white dark:bg-opacity-20"
          )}
        >
          {item.submenu!.map((subItem, index) => (
            <DropdownMenuContent key={index} item={subItem} />
          ))}
        </DropdownMenu>
      )}
    </li>
  );
};

export default DropdownMenuItem;
