import { DropdownMenuInterface } from "../../types/dropdown";

export const finderMenu: DropdownMenuInterface[] = [
  {
    title: "Finder",
    items: [
      { id: "finder_about", title: "About Finder" },
      { id: "separator" },
      { id: "finder_preferences", title: "Preferences", shortcut: "CMD+," },
      { id: "separator" },
      {
        id: "finder_empty_bin",
        title: "Empty Bin...",
        shortcut: "CAPSLOCK+CMD+BACKSPACE",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_services",
        title: "Services",
        submenu: [
          {
            id: "finder_services_id",
            title: "No Services Apply",
            inactive: true,
          },
          { id: "separator" },
          {
            id: "finder_services_preferances",
            title: "Services Preferences",
            icon: "O",
          },
        ],
      },
      { id: "separator" },
      { id: "finder_hide_finder", title: "Hide Finder", shortcut: "CMD+H" },
      {
        id: "finder_hide_others",
        title: "Hide Others",
        shortcut: "ALT+CMD+H",
      },
      { id: "finder_show_all", title: "Show All" },
    ],
  },
  {
    title: "File",
    items: [
      {
        id: "finder_new_finder_window",
        title: "New Finder Window",
        shortcut: "CMD+N",
      },
      {
        id: "finder_new_folder",
        title: "New Folder",
        shortcut: "SHIFT+CMD+N",
      },
      {
        id: "finder_new_folder_with_selection",
        title: "New Folder",
        shortcut: "^+CMD+N",
        inactive: true,
      },
      {
        id: "separator",
      },
      {
        id: "finder_open_with",
        title: "Open With",
        inactive: true,
      },
      {
        id: "finder_open_with",
        title: "Open With",
        submenu: [
          { id: "finder_test 1", title: "test 1" },
          {
            id: "finder_test 2",
            title: "test 2",
            func: () => console.log("gowno dziala"),
          },
          { id: "finder_test 3", title: "test 3" },
        ],
      },
    ],
  },
];
