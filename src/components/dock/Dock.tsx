import { dockApps, trashApp } from "@/data/dockConfigs";
import Divider from "./Divider";
import { AppConfig } from "@/types/app";
import { useDispatch } from "react-redux";
import { openWindow } from "@/store/reducers/windowSlice";

const Dock = () => {
  const dispatch = useDispatch();

  const handleClick = (app: AppConfig) => {
    dispatch(openWindow(app.title));
  };

  return (
    <div className="fixed bottom-0 w-full flex items-end justify-center h-[80px] pointer-events-none">
      <div className="flex items-center bg-dock-background w-fit h-full rounded-[29px] before:rounded-[29px] after:rounded-[29px] gap-1.5 window-border mb-1.5 back px-3 py-1.5 z-30 pointer-events-auto">
        {dockApps.map((app, index) => {
          const Icon = app.icon;
          return (
            <div
              key={index}
              className="dock-item"
              onClick={() => handleClick(app)}
            >
              <Icon />
            </div>
          );
        })}
        <Divider />
        <div className="dock-item" onClick={() => handleClick(trashApp)}>
          <trashApp.icon />
        </div>
      </div>
    </div>
  );
};

export default Dock;
