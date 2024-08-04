import { RootState } from "@/store/store";
import { getConfigByTitle } from "@/utils/getConfigByTitle";
import { useSelector } from "react-redux";

const Desktop = () => {
  const openedApps = useSelector((state: RootState) => state.window.openedApps);
  console.log(openedApps);

  return (
    <div id="desktop" className="h-auto grid grid-cols-12 grid-rows-9">
      {openedApps.map((app, index) => {
        const AppComponent = getConfigByTitle(app.title).engine;
        return <AppComponent key={index} />;
      })}
    </div>
  );
};

export default Desktop;
