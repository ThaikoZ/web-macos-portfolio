import { setActiveWindow } from "@/store/reducers/windowSlice";
import { Store } from "@/store/store";
import { getConfigByTitle } from "@/utils/getConfigByTitle";
import { useDispatch, useSelector } from "react-redux";
// import DeskContextMenu from "./DeskContextMenu";

const Desk = () => {
  const { openedWindows } = useSelector((state: Store) => state.window);
  const dispatch = useDispatch();

  const looseFocus = () => dispatch(setActiveWindow(-1));

  return (
    <>
      {/* <DeskContextMenu> */}
      <div className="absolute w-full h-full " onClick={looseFocus}></div>
      {/* </DeskContextMenu> */}
      <div id="Desk" className="absolute z-10">
        {openedWindows.map((window) => {
          const AppComponent = getConfigByTitle(window.title).engine;
          return (
            <div key={window.id} className="absolute bg-black w-0 h-0">
              <AppComponent id={window.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Desk;
