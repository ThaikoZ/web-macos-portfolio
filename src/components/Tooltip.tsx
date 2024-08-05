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
    <RadixTooltip.Provider delayDuration={50}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div>{children}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            sideOffset={9}
            className={cn(
              className,
              "select-none px-3 py-1.5 bg- !text-white font-normal z-50 window-border before:!rounded-lg after:!rounded-lg !rounded-lg"
            )}
          >
            {hint}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
