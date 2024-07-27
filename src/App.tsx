import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";
import icon from "./assets/apple-logo.svg";
import Button from "./components/ui/Button";
import FlexContainer from "./components/FlexContainer";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./store/reducers/darkModeSlice";
import Dropdown from "./components/ui/Dropdown/Dropdown";
import { RootState } from "./store/store";
import { getMenuByTitle } from "./utils/getMenuByTitle";

const App = () => {
  const dispatch = useDispatch();
  const { title } = useSelector(
    (state: RootState) => state.system.activeWindow
  );
  const menu = getMenuByTitle(title);

  return (
    <Screen>
      <TopBar>
        <FlexContainer className="justify-start space-x-2">
          <Dropdown
            trigger={<Button icon={icon} onClick={() => {}} />}
            menu={menu}
          />
          <Button className="font-semibold">{title}</Button>
          <Button>File</Button>
          <Button>Edit</Button>
          <Button>View</Button>
          <Button>Go</Button>
          <Button>Window</Button>
          <Button>Help</Button>
        </FlexContainer>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleDarkMode());
            }}
          >
            Switch Mode
          </button>
        </div>
        {/* Apple Dropdown menu */}
        {/* Horizontal Active menu items*/}
        {/* Right panel */}
      </TopBar>
      {/* ScreenView */}
      {/* Bottom Dock */}
    </Screen>
  );
};

export default App;
