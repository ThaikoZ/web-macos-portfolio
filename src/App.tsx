import { useDispatch, useSelector } from "react-redux";
import FlexContainer from "./components/FlexContainer";
import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";
import WifiButton from "./components/TopBar/WifiButton";
import Button from "./components/ui/Button";
import { Dropdown } from "./components/ui/Dropdown/Dropdown";
import { RootState } from "./store/store";
import { getMenuByTitle } from "./utils/getMenuByTitle";
import {
  BatteryFullIcon,
  SettingsPanelIcon,
  SpotlightIcon,
  UserAccountIcon,
} from "./assets/icons/utility";
import ActiveWindowDetails from "./components/TopBar/ActiveWindowDetails";
import SystemSettingsDropdown from "./components/TopBar/SystemSettingsDropdown";
import { toggleDarkMode } from "./store/reducers/darkModeSlice";

const App = () => {
  const dispatch = useDispatch();
  const { title } = useSelector(
    (state: RootState) => state.system.activeWindow
  );
  const menu = getMenuByTitle(title);

  return (
    <Screen>
      <TopBar>
        <FlexContainer className="justify-start">
        <Dropdown.Group>
          <SystemSettingsDropdown />
          <ActiveWindowDetails menu={menu}/>
          </Dropdown.Group>
        </FlexContainer>
        <FlexContainer>
          <div className="flex">
            <Button Icon={<BatteryFullIcon width={24} />} />
            <WifiButton />
            <Button Icon={<SpotlightIcon width={17} />} />
            <Button Icon={<UserAccountIcon />} />
            <Button Icon={<SettingsPanelIcon width={20} />} />
            <ul className="flex">
              <Button>
                <div className="flex gap-2.5">
                  <span>Mon Jun 5</span>
                  <span>9:41 AM</span>
                </div>
              </Button>
            </ul>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleDarkMode());
            }}
          >
            Switch Mode
          </button>
        </FlexContainer>
        {/* Right panel */}
      </TopBar>
      {/* ScreenView */}
      {/* Bottom Dock */}
    </Screen>
  );
};

export default App;
