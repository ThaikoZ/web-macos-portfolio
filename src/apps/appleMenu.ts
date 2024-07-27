import { DropdownItemInterface } from "../types/dropdown";

export const appleMenu: DropdownItemInterface[] = [
  { id: "about", title: "About This Mac" },
  { id: "separator" },
  { id: "preferences", title: "System Preferences" },
  { id: "app_store", title: "App Store..." },
  { id: "separator" },
  {
    id: "recent",
    title: "Recent Items",
    submenu: [
      { id: "recent_appliactions", title: "Applications", inactive: true },
      { id: "separator" },
      { id: "recent_documents", title: "Documents", inactive: true },
      { id: "separator" },
      { id: "recent_servers", title: "Servers", inactive: true },
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
  { id: "log_out", title: "Log Out Adrian Sudak...", shortcut: "SHIFT+CMD+Q" },
];
