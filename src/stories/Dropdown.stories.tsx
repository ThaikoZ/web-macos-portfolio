import Dropdown from "@/components/new/ui/Dropdown";
import { Default as DefaultBtn, Icon as IconBtn } from "./Button.stories";
import { systemMenu } from "@/apps/systemMenu";
import Button from "@/components/new/ui/Button";
import { AppleLogoIcon } from "@/assets/icons/utility";

export default {
  title: "Dropdown",
  component: Dropdown,
};

export const Default = {
  args: {
    trigger: <Button>File</Button>,
    menuItems: systemMenu,
  },
};

export const ActiveWindow = {
  args: {
    trigger: <Button>File</Button>,
    menuItems: systemMenu,
  },
};

export const SystemSettings = {
  args: {
    trigger: <Button icon={<AppleLogoIcon />} />,
    menuItems: systemMenu,
  },
};
