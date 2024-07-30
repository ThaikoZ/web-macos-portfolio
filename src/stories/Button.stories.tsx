import { AppleLogoIcon } from "@/assets/icons/utility";
import Button from "@/components/new/ui/Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = {
  args: {
    children: "File",
    font: "medium",
  },
};

export const Bolded = {
  args: {
    children: "Finder",
    font: "bold",
  },
};

export const Icon = {
  args: {
    icon: <AppleLogoIcon />,
    active: false,
  },
};
