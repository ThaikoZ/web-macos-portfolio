export interface DropdownItemInterface {
  id: string | "separator" | "submenu" | "title";
  title?: string;
  inactive?: boolean;
  shortcut?: string;
  badge?: string;
  icon?: string;
  submenu?: DropdownItemInterface[];
  className?: string;
  disabled?: boolean;
  func?: () => void;
  variant?: "secondary";
}

export interface DropdownMenuInterface {
  title: string;
  items: DropdownItemInterface[];
}
