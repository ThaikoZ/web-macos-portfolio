import { dockApps } from "@/data/dockConfigs";
import {
  openWindow,
  setActiveWindow,
  restoreWindow,
} from "@/store/reducers/windowSlice";
import { Store } from "@/store/store";
import { AppConfig } from "@/types/app";
import { useDispatch, useSelector } from "react-redux";
import Divider from "./Divider";
import Dot from "./Dot";

const Dock = () => {
  const { openedWindows, minimizedWindows } = useSelector(
    (state: Store) => state.window
  );
  const dispatch = useDispatch();

  const checkIfOpened = (title: string) =>
    openedWindows.find((window) => window.title === title);

  const checkIfMinimized = (title: string) =>
    minimizedWindows.find((window) => window.title === title);

  const handleClick = (app: AppConfig) => {
    const openedApp = checkIfOpened(app.title);
    const minimizedApp = checkIfMinimized(app.title);

    if (minimizedApp) {
      dispatch(restoreWindow(minimizedApp.id));
    } else if (!openedApp) {
      dispatch(openWindow(app.title));
    } else {
      dispatch(setActiveWindow(openedApp.id));
    }
  };

  return (
    <div className="fixed bottom-0 w-full flex items-end justify-center h-[80px] pointer-events-none">
      <div className="flex items-center bg-dock-background w-fit h-full rounded-3xl before:rounded-3xl after:rounded-3xl gap-1.5 window-border mb-1.5 back px-2 py-1.5 z-30 pointer-events-auto pb-4">
        {dockApps.map((app, index) => {
          const includeDivider = index === dockApps.length - 2;
          const openedApp = checkIfOpened(app.title);
          const minimizedApp = checkIfMinimized(app.title);
          const Icon = app.icon;

          return (
            <div className="flex" key={index}>
              <div className="flex flex-col items-center">
                <div className="dock-item" onClick={() => handleClick(app)}>
                  <Icon />
                </div>
                {(openedApp || minimizedApp) && <Dot />}
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
