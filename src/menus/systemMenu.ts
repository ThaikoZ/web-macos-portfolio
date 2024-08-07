import { DropdownMenuInterface } from "@/types/dropdown";

export default {
  title: "",
  items: [
    { id: "about", title: "About This Mac" },
    { id: "separator" },
    { id: "preferences", title: "System Preferences", badge: "1 update" },
    { id: "app_store", title: "App Store...", badge: "7 updates" },
    { id: "separator" },
    {
      id: "submenu",
      title: "Recent Items",
      submenu: [
        { id: "title", title: "Applications", inactive: true },
        { id: "separator" },
        { id: "title", title: "Documents", inactive: true },
        { id: "separator" },
        { id: "title", title: "Servers", inactive: true },
        { id: "separator" },
        { id: "recent_clear", title: "Clear Menu" },
      ],
    },
    { id: "separator" },
    { id: "quit", title: "Force Quit...", shortcut: "ALT+CMD+ESC" },
    { id: "separator" },
    { id: "sleep", title: "Sleep" },
    { id: "restart", title: "Restart..." },
    { id: "shut_down", title: "Shut Down..." },
    { id: "separator" },
    { id: "lock", title: "Lock Screen", shortcut: "CTRL+CMD+Q" },
    {
      id: "log_out",
      title: "Log Out Adrian Sudak...",
      shortcut: "SHIFT+CMD+Q",
    },
  ],
} as DropdownMenuInterface;
