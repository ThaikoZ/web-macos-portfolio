import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";

import Button from "./components/ui/Button";
import FlexContainer from "./components/FlexContainer";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./components/ui/Dropdown/Dropdown";
import { RootState } from "./store/store";
import { getMenuByTitle } from "./utils/getMenuByTitle";
import { appleMenu } from "./apps/appleMenu";
import WifiButton from "./components/TopBar/WifiButton";
import BatteryFullIcon from "./assets/icons/utility/BatteryFullIcon";
import UserAccountIcon from "./assets/icons/utility/UserAccountIcon";
import AppleLogoIcon from "./assets/icons/utility/AppleLogoIcon";
import SpotlightIcon from "./assets/icons/utility/SpotlightIcon";
import SettingsPanelIcon from "./assets/icons/utility/SettingsPanel";
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
          <Dropdown
            trigger={<Button Icon={<AppleLogoIcon />} />}
            menu={appleMenu}
          />
          {menu.map((item, index) => (
            <Dropdown
              key={index}
              trigger={
                index == 0 ? (
                  <Button className="font-semibold ">{item.title}</Button>
                ) : (
                  <Button>{item.title}</Button>
                )
              }
              menu={item.items}
            />
          ))}
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
