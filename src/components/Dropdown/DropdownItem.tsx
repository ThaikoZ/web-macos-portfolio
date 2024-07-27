export interface DropdownItemInterface {
  id: string;
  title: string;
  href: string;
}

interface Props {
  item: DropdownItemInterface;
  onClick: (id: string) => void;
}

const DropdownItem = ({ item, onClick }: Props) => {
  return (
    <li
      className="hover:bg-gray-200"
      onClick={(e) => {
        e.preventDefault();
        onClick(item.id);
      }}
    >
      {item.title}
    </li>
  );
};

export default DropdownItem;
