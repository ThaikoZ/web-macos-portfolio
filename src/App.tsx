import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";
import Button from "./components/ui/Button";
import FlexContainer from "./components/FlexContainer";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "./components/ui/NewDropdown/Dropdown";
import { RootState } from "./store/store";
import { getMenuByTitle } from "./utils/getMenuByTitle";
import { systemMenu } from "./apps/systemMenu";
import WifiButton from "./components/TopBar/WifiButton";

import { toggleDarkMode } from "./store/reducers/darkModeSlice";
import {
  AppleLogoIcon,
  BatteryFullIcon,
  SettingsPanelIcon,
  SpotlightIcon,
  UserAccountIcon,
} from "./assets/icons/utility";
import { cn } from "./lib/utils";

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
          <Dropdown id="appleMenu">
          <Dropdown.Trigger>
            <Button Icon={<AppleLogoIcon />}/>
          </Dropdown.Trigger>
          <Dropdown.Menu >
            {systemMenu.map((item, index) => <Dropdown.Content key={index} item={item}/>)}
          </Dropdown.Menu>
          </Dropdown>
          {menu.map((item, index) => (
            <Dropdown key={index} id={item.title}>
              <Dropdown.Trigger>
                <Button className={cn({"font-[700] ": !index})}>{item.title}</Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                {item.items.map((item, index) => <Dropdown.Content key={index} item={item}/>)}
              </Dropdown.Menu>
            </Dropdown>
          ))}
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
