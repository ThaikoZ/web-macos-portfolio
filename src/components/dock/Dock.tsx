import { dockApps } from "@/data/dockApps";
import Divider from "./Divider";
import TrashAppIcon from "@/apps/Trash/TrashAppIcon";

const Dock = () => {
  const handleClick = (title: string) => {
    console.log(title, "clicked");
  };

  return (
    <div className="fixed bottom-0 w-full flex items-end justify-center h-[86px] z-30">
      <div className="flex items-center bg-dock-background w-fit h-full rounded-[29px] before:rounded-[29px] after:rounded-[29px] gap-1.5 window-border mb-1.5 back px-3 py-1.5">
        {dockApps.map((app, index) => {
          const Icon = app.appIcon;
          return (
            <div
              key={index}
              className="dock-item"
              onClick={() => handleClick(app.id)}
            >
              <Icon />
            </div>
          );
        })}
        <Divider />
        <div className="dock-item" onClick={() => handleClick("Trash")}>
          <TrashAppIcon />
        </div>
      </div>
    </div>
  );
};

export default Dock;
