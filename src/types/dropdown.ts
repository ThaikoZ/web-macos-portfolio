export interface DropdownItemInterface {
  id: string;
  title?: string;
  inactive?: boolean;
  shortcut?: string;
  badge?: string;
  icon?: string;
  submenu?: DropdownItemInterface[];
  className?: string;
  disabled?: boolean;
  func?: () => void;
}

export interface DropdownMenuInterface {
  title: string;
  items: DropdownItemInterface[];
}
