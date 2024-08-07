import * as ContextMenu from "@radix-ui/react-context-menu";
import { ChevronRightIcon } from "@/assets/icons/utility";
import { PropsWithChildren } from "react";

const DeskContextMenu = ({ children }: PropsWithChildren) => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="w-full h-full absolute">
        {children}
      </ContextMenu.Trigger>
      <ContextMenu.Content className="bg-white border rounded shadow-md p-2 z-30">
        <ContextMenu.Item className="group flex justify-between items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-200">
          New Window
        </ContextMenu.Item>
        <ContextMenu.Item className="group flex justify-between items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-200">
          Close Window
        </ContextMenu.Item>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger className="group flex justify-between items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-200">
            More Options
            <ChevronRightIcon className="group-hover:fill-gray-800" />
          </ContextMenu.SubTrigger>
          <ContextMenu.Portal>
            <ContextMenu.SubContent className="bg-white border rounded shadow-md p-2">
              <ContextMenu.Item className="group flex justify-between items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-200">
                Option 1
              </ContextMenu.Item>
              <ContextMenu.Item className="group flex justify-between items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-200">
                Option 2
              </ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Portal>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
};

export default DeskContextMenu;
