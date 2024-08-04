import { Store } from "@/store/store";
import { getConfigByTitle } from "@/utils/getConfigByTitle";
import { useSelector } from "react-redux";

const Desktop = () => {
  const { openedWindows } = useSelector((state: Store) => state.window);
  return (
    <div id="desktop" className=" absolute">
      {openedWindows.map((window) => {
        const AppComponent = getConfigByTitle(window.title).engine;

        return (
          <div key={window.id} className="absolute">
            <AppComponent id={window.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Desktop;
