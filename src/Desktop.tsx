import { useDispatch, useSelector } from "react-redux";
import FlexContainer from "./components/FlexContainer";
import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";
import WifiButton from "./components/TopBar/WifiButton";
import Button from "./components/Oldui/Button";
import { Dropdown } from "./components/Oldui/Dropdown/Dropdown";
import { RootState } from "./store/store";
import { getMenuByTitle } from "@/lib/utils";
import {
  SettingsPanelIcon,
  SpotlightIcon,
  UserAccountIcon,
} from "./assets/icons/utility";
import { toggleDarkMode } from "./store/reducers/darkModeSlice";
import BatteryButton from "./components/TopBar/BatteryButton";
import SystemToolbar from "./components/TopBar/SystemToolbar";

const Desktop = () => {
  const dispatch = useDispatch();
  const { title } = useSelector(
    (state: RootState) => state.system.activeWindow
  );
  const menu = getMenuByTitle(title);

  return (
    <Screen>
      <TopBar>
        {/* <SystemToolbar /> */}
        <FlexContainer>
          <div className="flex">
            <BatteryButton />
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

export default Desktop;
