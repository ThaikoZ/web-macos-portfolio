import FinderAppIcon from "@/apps/Finder/FinderAppIcon";
import Divider from "./Divider";
import TrashAppIcon from "@/apps/Trash/TrashAppIcon";

const dockApps = [
  { id: "Finder", appIcon: <FinderAppIcon /> },
  { id: "Dock", appIcon: <FinderAppIcon /> },
  { id: "Dock", appIcon: <FinderAppIcon /> },
  { id: "Dock", appIcon: <FinderAppIcon /> },
];

const Dock = () => {
  const handleClick = (title: string) => {
    console.log(title, "clicked");
  };

  return (
    <div className="flex items-end justify-center h-[92px] ">
      <div className="flex items-center bg-dock-background w-fit min-w-96 h-full rounded-[29px] before:rounded-[29px] after:rounded-[29px] gap-1.5 window-border mb-1.5 back px-3 py-1.5">
        {dockApps.map((app, index) => (
          <div
            key={index}
            className="dock-item"
            onClick={() => handleClick(app.id)}
          >
            {app.appIcon}
          </div>
        ))}
        <Divider />
        <div className="dock-item" onClick={() => handleClick("Trash")}>
          <TrashAppIcon />
        </div>
      </div>
    </div>
  );
};

export default Dock;
