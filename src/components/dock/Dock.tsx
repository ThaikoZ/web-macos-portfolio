import { dockApps } from "@/data/dockConfigs";
import { openWindow, setActiveWindow } from "@/store/reducers/windowSlice";
import { Store } from "@/store/store";
import { AppConfig } from "@/types/app";
import { useDispatch, useSelector } from "react-redux";
import Divider from "./Divider";
import Dot from "./Dot";

const Dock = () => {
  const { openedWindows } = useSelector((state: Store) => state.window);
  const dispatch = useDispatch();

  const checkIfOpened = (title: string) =>
    openedWindows.find((window) => window.title === title);

  const handleClick = (app: AppConfig) => {
    const checkedApp = checkIfOpened(app.title);
    if (!checkedApp) dispatch(openWindow(app.title));
    else dispatch(setActiveWindow(checkedApp.id));
  };

  return (
    <div className="fixed bottom-0 w-full flex items-end justify-center h-0 pointer-events-non z-10">
      <div className="flex items-center bg-dock-background w-fit h-[74px] rounded-3xl before:rounded-3xl after:rounded-3xl gap-1.5 window-border mb-1.5 back px-2 py-1.5  pointer-events-auto pb-3.5">
        {dockApps.map((app, index) => {
          const includeDivider = index === dockApps.length - 2;
          const checkedApp = checkIfOpened(app.title);
          const Icon = app.icon;

          return (
            <div className="flex" key={index}>
              <div className="flex flex-col items-center">
                <div className="dock-item " onClick={() => handleClick(app)}>
                  <Icon />
                </div>
                {checkedApp && <Dot />}
              </div>
              <div>{includeDivider && <Divider />}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
