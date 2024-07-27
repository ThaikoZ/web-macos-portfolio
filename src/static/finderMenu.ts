import { DropdownItemInterface } from "../types/dropdown";

export const finderMenu: DropdownItemInterface[] = [
  {
    id: "about",
    title: "About This Mac",
    func: () => {
      console.log("about");
    },
  },
  { id: "separator", title: "", func: () => {} },
  {
    id: "preferences",
    title: "System Preferences",
    func: () => {
      console.log("preferences");
    },
  },
  {
    id: "app_store",
    title: "App Store...",
    func: () => console.log("app_store"),
  },
  { id: "separator", title: "", func: () => {} },
  { id: "recent", title: "Recent Items", func: () => console.log("recent") },
  { id: "separator", title: "", func: () => {} },
  { id: "quit", title: "Force Quit...", func: () => console.log("quit") },
  { id: "separator", title: "", func: () => {} },
  { id: "sleep", title: "Sleep", func: () => console.log("sleep") },
  { id: "restart", title: "Restart...", func: () => console.log("restart") },
  {
    id: "shut_down",
    title: "Shut Down...",
    func: () => console.log("shut_down"),
  },
  { id: "separator", title: "", func: () => {} },
  { id: "lock", title: "Lock Screen", func: () => console.log("lock") },
  {
    id: "log_out",
    title: "Log Out Adrian Sudak",
    func: () => console.log("log_out"),
  },
];
