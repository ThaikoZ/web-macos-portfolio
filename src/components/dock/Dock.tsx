import useDesk from "@/hooks/useDesk";
import { AppConfig } from "@/types/app";
import { dockApps } from "dockConfigs";
import Divider from "./Divider";
import Dot from "./Dot";
import { checkIfWindowIsOpened } from "@/utils/window";

const Dock = () => {
  const { openedWindows, openWindow, setActiveWindow } = useDesk();

  const handleClick = (app: AppConfig) => {
    const existingApp = checkIfWindowIsOpened(openedWindows, app);
    existingApp ? setActiveWindow(existingApp) : openWindow(app);
  };

  const renderAppItem = (app: AppConfig, index: number) => {
    const isLastItem = index === dockApps.length - 2;
    const isAppOpened = checkIfWindowIsOpened(openedWindows, app);
    const Icon = app.icon;

    return (
      <div className="flex" key={index}>
        <div className="flex flex-col items-center">
          <div className="dock-item" onClick={() => handleClick(app)}>
            <Icon />
          </div>
          {isAppOpened && <Dot />}
        </div>
        {isLastItem && <Divider />}
      </div>
    );
  };

  return (
    <div className="fixed bottom-0 w-full flex items-end justify-center h-0 pointer-events-non z-10">
      <div className="flex items-center bg-dock-background w-fit h-[74px] rounded-3xl before:rounded-3xl after:rounded-3xl gap-1.5 window-border mb-1.5 back px-2 py-1.5 pointer-events-auto pb-3.5">
        {dockApps.map(renderAppItem)}
      </div>
    </div>
  );
};

export default Dock;
