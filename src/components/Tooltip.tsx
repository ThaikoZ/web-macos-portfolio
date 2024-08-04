import { cn } from "@/utils/cn";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  hint: string;
  className?: string;
}

const Tooltip = ({ children, hint, className }: Props) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div>{children}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            sideOffset={3}
            className={cn(
              className,
              "select-none bg-black px-3 py-1.5 text-white rounded-md font-normal "
            )}
          >
            {hint}
            <RadixTooltip.Arrow />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
