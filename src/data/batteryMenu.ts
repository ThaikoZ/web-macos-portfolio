import { DropdownMenuInterface } from "@/types/dropdown";

export const batteryMenu: DropdownMenuInterface = {
  title: "Battery Menu",
  items: [
    {
      id: "battery-header",
      title: "Battery",
      shortcut: "100%",
      className: "mb-1 font-bold",
      disabled: true,
    },
    { id: "title", title: "Power Source: Battery" },
    { id: "separator" },
    { id: "title", title: "No Apps Using Significant Energy" },
    { id: "separator" },
    {
      id: "system_battery_preferences",
      title: "Battery Preferences...",
      variant: "secondary",
    },
  ],
};
