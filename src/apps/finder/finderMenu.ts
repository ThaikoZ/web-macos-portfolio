import { DropdownMenuInterface } from "@/types/Dropdown";
import settingIcon from "@/assets/icons/apps/settings-icon.svg";

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
        shortcut: "SHIFT+CMD+BACKSPACE",
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
            title: "Services Preferences...",
            icon: settingIcon,
          },
        ],
      },
      // { id: "separator" },
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
        id: "finder_file_new_window",
        title: "New Finder Window",
        shortcut: "CMD+N",
      },
      {
        id: "finder_file_new_folder",
        title: "New Folder",
        shortcut: "SHIFT+CMD+N",
      },
      {
        id: "finder_file_new_folder_with_selection",
        title: "New Folder",
        shortcut: "^+CMD+N",
        inactive: true,
      },
      {
        id: "finder_file_smart_folder",
        title: "Smart Folder",
      },
      {
        id: "finder_file_new_tab",
        title: "New Tab",
        shortcut: "CMD+T",
      },
      {
        id: "finder_file_open",
        title: "Open",
        shortcut: "CMD+O",
        inactive: true,
      },
      {
        id: "finder_file_open_with",
        title: "Open With",
        submenu: [],
        inactive: true,
      },
      {
        id: "finder_file_close_window",
        title: "Close Window",
        shortcut: "CMD+W",
        inactive: true,
      },
      {
        id: "separator",
      },
      {
        id: "finder_file_get_info",
        title: "Get Info",
        shortcut: "CMD+I",
      },
      {
        id: "finder_file_rename",
        title: "Rename",
        inactive: true,
      },
      {
        id: "finder_file_compress",
        title: "Compress",
        inactive: true,
      },
      {
        id: "finder_file_duplicate",
        title: "Duplicate",
        inactive: true,
        shortcut: "CMD+D",
      },
      {
        id: "finder_file_make_alias",
        title: "Make Alias",
        inactive: true,
        shortcut: "CTRL+CMD+A",
      },
      {
        id: "finder_file_quick_look",
        title: "Quick Look",
        inactive: true,
        shortcut: "CMD+Y",
      },
      {
        id: "finder_file_print",
        title: "Print",
        inactive: true,
        shortcut: "CMD+P",
      },
      { id: "separator" },
      {
        id: "finder_file_share",
        title: "Share",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_file_show_original",
        title: "Show Original",
        inactive: true,
        shortcut: "CMD+R",
      },
      {
        id: "finder_file_add_to_sidebar",
        title: "Add to Sidebar",
        inactive: true,
        shortcut: "CTLR+CMD+T",
      },
      { id: "separator" },
      {
        id: "finder_file_move_to_bin",
        title: "Move to Bin",
        inactive: true,
        shortcut: "CMD+BACKSPACE",
      },
      {
        id: "finder_file_eject",
        title: "Eject",
        inactive: true,
        shortcut: "CMD+E",
      },
      { id: "separator" },
      {
        id: "finder_file_tags",
        title: "Tags...",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_file_find",
        title: "Find",
        shortcut: "CMD+F",
      },
    ],
  },
  {
    title: "Edit",
    items: [
      {
        id: "finder_edit_undo",
        title: "Undo",
        shortcut: "CMD+Z",
        inactive: true,
      },
      {
        id: "finder_edit_redo",
        title: "Redo",
        shortcut: "SHIFT+CMD+Z",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_edit_cut",
        title: "Cut",
        shortcut: "CMD+X",
        inactive: true,
      },
      {
        id: "finder_edit_copy",
        title: "Copy",
        shortcut: "CMD+C",
        inactive: true,
      },
      {
        id: "finder_edit_paste",
        title: "Paste",
        shortcut: "CMD+V",
        inactive: true,
      },
      { id: "finder_edit_select_all", title: "Select All", shortcut: "CMD+A" },
      { id: "separator" },
      { id: "finder_edit_show_clipboard", title: "Show Clipboard" },
      { id: "separator" },
      { id: "finder_edit_start_dictation", title: "Start Dictation..." },
      {
        id: "finder_edit_emoji_and_symbols",
        title: "Emoji & Symbols",
        shortcut: "FN+E",
      },
    ],
  },
  {
    title: "View",
    items: [
      {
        id: "finder_view_as_icons",
        title: "as Icons",
        shortcut: "CMD+1",
        inactive: true,
      },
      {
        id: "finder_view_as_list",
        title: "as List",
        shortcut: "CMD+2",
        inactive: true,
      },
      {
        id: "finder_view_as_columns",
        title: "as Columns",
        shortcut: "CMD+3",
        inactive: true,
      },
      {
        id: "finder_view_as_gallery",
        title: "as Gallery",
        shortcut: "CMD+4",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_view_use_stacks",
        title: "Use Stacks",
        shortcut: "CTRL+CMD+O",
      },
      {
        id: "finder_view_sort_by",
        title: "Sort By",
        submenu: [
          {
            id: "finder_view_sort_by_none",
            title: "None",
            shortcut: "CTRL+ALT+CMD+O",
          },
          { id: "separator" },
          { id: "finder_view_sort_by_snap_to_grid", title: "Snap to Grid" },
          { id: "separator" },
          {
            id: "finder_view_sort_by_name",
            title: "Name",
            shortcut: "CTRL+ALT+CMD+1",
          },
          {
            id: "finder_view_sort_by_kind",
            title: "Kind",
            shortcut: "CTRL+ALT+CMD+2",
          },
          {
            id: "finder_view_sort_by_date_last_opened",
            title: "Date Last Opened",
            shortcut: "CTRL+ALT+CMD+3",
          },
          {
            id: "finder_view_sort_by_date_added",
            title: "Date Added",
            shortcut: "CTRL+ALT+CMD+4",
          },
          {
            id: "finder_view_sort_by_date_modified",
            title: "Date Modified",
            shortcut: "CTRL+ALT+CMD+5",
          },
          { id: "finder_view_sort_by_date_created", title: "Date Created" },
          {
            id: "finder_view_sort_by_size",
            title: "Size",
            shortcut: "CTRL+ALT+CMD+6",
          },
          {
            id: "finder_view_sort_by_tags",
            title: "Tags",
            shortcut: "CTRL+ALT+CMD+7",
          },
        ],
      },
      { id: "finder_view_clean_up", title: "Clean Up" },
      {
        id: "finder_view_clean_up_by",
        title: "Clean Up By",
        submenu: [
          {
            id: "finder_view_clean_up_by_name",
            title: "Name",
            shortcut: "CTRL+ALT+CMD+1",
          },
          {
            id: "finder_view_clean_up_by_kind",
            title: "Kind",
            shortcut: "CTRL+ALT+CMD+2",
          },
          {
            id: "finder_view_clean_up_by_date_modified",
            title: "Date Modified",
            shortcut: "CTRL+ALT+CMD+5",
          },
          { id: "finder_view_clean_up_by_date_created", title: "Date Created" },
          {
            id: "finder_view_clean_up_by_size",
            title: "Size",
            shortcut: "CTRL+ALT+CMD+6",
          },
          {
            id: "finder_view_clean_up_by_tags",
            title: "Tags",
            shortcut: "CTRL+ALT+CMD+7",
          },
        ],
      },
      { id: "separator" },

      {
        id: "finder_view_hide_sidebar",
        title: "Hide Sidebar",
        shortcut: "CTRL+CMD+S",
        inactive: true,
      },
      {
        id: "finder_view_hide_preview",
        title: "Hide Preview",
        shortcut: "SHIFT+CMD+P",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_view_hide_toolbar",
        title: "Hide Toolbar",
        shortcut: "ALT+CMD+T",
        inactive: true,
      },
      {
        id: "finder_view_show_all_tabs",
        title: "Show All Tabs",
        shortcut: "SHIFT+CMD+\\",
        inactive: true,
      },
      {
        id: "finder_view_hide_tab_bar",
        title: "Hide Tab Bar",
        shortcut: "SHIFT+CMD+T",
        inactive: true,
      },
      {
        id: "finder_view_hide_path_bar",
        title: "Hide Path Bar",
        shortcut: "ALT+CMD+P",
        inactive: true,
      },
      {
        id: "finder_view_hide_status_bar",
        title: "Hide Status Bar",
        shortcut: "CMD+/",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_view_customize_toolbar",
        title: "Customize Toolbar...",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_view_show_view_options",
        title: "Show View Options",
        shortcut: "CMD+J",
      },
      {
        id: "finder_view_show_preview_options",
        title: "Show Preview Options",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_view_Enter Full Screen",
        title: "Enter Full Screen",
        shortcut: "FN+F",
      },
    ],
  },
  {
    title: "Go",
    items: [
      {
        id: "finder_go_back",
        title: "Back",
        shortcut: "CMD+[",
        inactive: true,
      },
      {
        id: "finder_go_forward",
        title: "Forward",
        shortcut: "CMD+]",
        inactive: true,
      },
      {
        id: "finder_go_enclosing_folder",
        title: "Enclosing folder",
        shortcut: "CMD+↑",
      },
      { id: "separator" },
      {
        id: "finder_go_recents",
        icon: "I",
        title: "Recents",
        shortcut: "CMD+↓",
      },
      {
        id: "finder_go_documents",
        icon: "I",
        title: "Documents",
        shortcut: "SHIFT+CMD+F",
      },
      {
        id: "finder_go_desktop",
        icon: "I",
        title: "Desktop",
        shortcut: "SHIFT+CMD+O",
      },
      // {
      //   id: "finder_go_downloads",
      //   icon: "I",
      //   title: "Downloads",
      //   shortcut: "SHIFT+CMD+D",
      // },
      // {
      //   id: "finder_go_home",
      //   icon: "I",
      //   title: "Home",
      //   shortcut: "ALT+CMD+H",
      // },
      // {
      //   id: "finder_go_library",
      //   icon: "I",
      //   title: "Library",
      //   shortcut: "SHIFT+CMD+L",
      // },
      // {
      //   id: "finder_go_computer",
      //   icon: "I",
      //   title: "Computer",
      //   shortcut: "SHIFT+CMD+C",
      // },
      // {
      //   id: "finder_go_airdrop",
      //   icon: "I",
      //   title: "AirDrops",
      //   shortcut: "SHIFT+CMD+R",
      // },
      // {
      //   id: "finder_go_network",
      //   icon: "I",
      //   title: "Network",
      //   shortcut: "SHIFT+CMD+K",
      // },
      // {
      //   id: "finder_go_icloud_drive",
      //   icon: "I",
      //   title: "iCloud Drive",
      //   shortcut: "SHIFT+CMD+I",
      // },
      // {
      //   id: "finder_go_shared",
      //   icon: "I",
      //   title: "Shared",
      //   shortcut: "SHIFT+CMD+S",
      // },
      // {
      //   id: "finder_go_applications",
      //   icon: "I",
      //   title: "Applicationss",
      //   shortcut: "SHIFT+CMD+A",
      // },
      // {
      //   id: "finder_go_utilities",
      //   icon: "I",
      //   title: "Utilities",
      //   shortcut: "SHIFT+CMD+U",
      // },
      // { id: "separator" },
      {
        id: "finder_go_recent_foldres",
        title: "Recent Folders",
        submenu: [
          {
            id: "finder_go_recent_folders_folders",
            title: "Folders",
            inactive: true,
          },
          { id: "separator" },
          {
            id: "finder_go_recent_folders_clear_menu",
            title: "Clear Menu",
          },
        ],
      },
      {
        id: "separator",
      },
      {
        id: "finder_go_go_to_folder",
        title: "Go to Folder...",
        shortcut: "SHIFT+CMD+G",
      },
      {
        id: "finder_go_connect_to_server",
        title: "Connect to Server...",
        shortcut: "CMD+K",
      },
    ],
  },
  {
    title: "Window",
    items: [
      {
        id: "finder_window_minimise",
        title: "Minimise",
        shortcut: "CMD+M",
        inactive: true,
      },
      { id: "finder_window_zoom", title: "Zoom", inactive: true },
      {
        id: "finder_window_move_window_to_left",
        title: "Move Window To Left Side Of Screen",
        inactive: true,
      },
      {
        id: "finder_window_move_window_to_right",
        title: "Move Window To Right Side Of Screen",
        inactive: true,
      },
      {
        id: "finder_window_replace_tiled_window",
        title: "Replace Tiled Window",
        inactive: true,
      },
      {
        id: "finder_window_cycle_through_windows",
        title: "Cycle Through Windows",
        shortcut: "CMD+`",
      },
      {
        id: "finder_window_show_progress_window",
        title: "Show Progress Window",
        inactive: true,
      },
      { id: "separator" },
      {
        id: "finder_window_bring_all_to_front",
        title: "Bring All To Front",
        shortcut: "CMD+M",
      },
    ],
  },
  {
    title: "Help",
    items: [
      { id: "help_search_input" },
      { id: "finder_help_macos_help", title: "macOS Help" },
      { id: "separator" },
      { id: "finder_help_whats_new", title: "See What's New in macOS" },
      { id: "finder_help_new_to_mac", title: "New to Mac? Learn the Basics" },
    ],
  },
];
