import { DropdownItemInterface } from "@/types/Dropdown";

export const batteryMenu: DropdownItemInterface[] = [
  {
    id: "battery-header",
    title: "Battery",
    shortcut: "100%",
    className: "mb-1",
    disabled: true,
  },
  { id: "title-2", title: "Power Source: Battery" },
  { id: "separator" },
  { id: "title-2", title: "No Apps Using Significant Energy" },
  { id: "separator" },
  {
    id: "system_battery_preferences",
    title: "Battery Preferences...",
    className: "dark:hover:bg-white dark:hover:bg-opacity-20",
  },
];
