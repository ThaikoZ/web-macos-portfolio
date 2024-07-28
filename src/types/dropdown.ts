export interface DropdownItemInterface {
  id: string;
  title?: string;
  inactive?: boolean;
  shortcut?: string;
  badge?: string;
  icon?: string;
  submenu?: DropdownItemInterface[];
  func?: () => void;
}

export interface DropdownMenuInterface {
  title: string;
  items: DropdownItemInterface[];
}
