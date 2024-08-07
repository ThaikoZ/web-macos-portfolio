import { FinderConfig } from "@/apps/index";
import useDesk from "@/hooks/useDesk";

const Desk = () => {
  const { openedWindows, setActiveWindow } = useDesk();

  const unFocus = () => setActiveWindow(FinderConfig);

  return (
    <>
      <div className="absolute w-full h-full " onClick={unFocus}></div>
      <div id="Desk" className="absolute z-10">
        {openedWindows.map((window) => {
          const AppComponent = window.engine;
          return (
            <div key={window.title} className="absolute bg-black w-0 h-0">
              <AppComponent />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Desk;
