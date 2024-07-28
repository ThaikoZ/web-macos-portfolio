import { DropdownMenuInterface } from "@/types/Dropdown";
import { Dropdown } from "../ui/Dropdown/Dropdown";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const ActiveWindowDetails = ({ menu }: { menu: DropdownMenuInterface[] }) => {
  return (
    <>
      {menu.map((item, index) => (
        <Dropdown key={index} id={item.title}>
          <Dropdown.Trigger>
            <Button className={cn({ "font-[700] ": !index })}>
              {item.title}
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            {item.items.map((item, index) => (
              <Dropdown.Content key={index} item={item} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </>
  );
};

export default ActiveWindowDetails;
