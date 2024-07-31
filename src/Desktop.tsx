import { getMenuByTitle } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { systemMenu } from "./apps/systemMenu";
import { AppleLogoIcon } from "./assets/icons/utility";
import FlexContainer from "./components/FlexContainer";
import Screen from "./components/Screen";
import TopBar from "./components/topbar/TopBar";
import Button from "./components/ui/Button";
import DropdownMenu from "./components/ui/DropdownMenu";
import { RootState } from "./store/store";
import { switchThemeTo } from "./store/reducers/systemSettingsSlice";

const Desktop = () => {
  const dispatch = useDispatch();
  const { activeWindowTitle, theme } = useSelector(
    (state: RootState) => state.systemSettings
  );
  const menu = getMenuByTitle(activeWindowTitle);

  const topbarDropdownClass =
    "bg-topbar-dropdown-background bg-topbar-dropdown-text bg-topbar-dropdown-border";

  return (
    <Screen>
      <TopBar>
        <FlexContainer className="justify-start ">
          <DropdownMenu
            trigger={<Button icon={<AppleLogoIcon />} />}
            className={topbarDropdownClass}
            menu={systemMenu}
          />
          {menu.map((item, index) => (
            <DropdownMenu
              key={item.title}
              className={topbarDropdownClass}
              trigger={
                <Button font={index === 0 ? "!font-bold" : ""}>
                  {item.title}
                </Button>
              }
              menu={item}
            />
          ))}
        </FlexContainer>
        <FlexContainer>
          <div className="flex">
            {/* <BatteryButton /> */}
            {/* <WifiButton /> */}
            {/* <Button icon={<SpotlightIcon width={17} />} /> */}
            {/* <Button icon={<UserAccountIcon />} /> */}
            {/* <Button icon={<SettingsPanelIcon width={20} />} /> */}
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
              dispatch(switchThemeTo(theme === "light" ? "dark" : "light"));
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
