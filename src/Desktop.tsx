import { getMenuByTitle } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { systemMenu } from "./apps/systemMenu";
import { AppleLogoIcon } from "./assets/icons/utility";
import FlexContainer from "./components/FlexContainer";
import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";
import Button from "./components/ui/Button";
import DropdownMenu  from "./components/ui/DropdownMenu";
import { toggleDarkMode } from "./store/reducers/darkModeSlice";
import { RootState } from "./store/store";

const Desktop = () => {
  const dispatch = useDispatch();
  const { title } = useSelector(
    (state: RootState) => state.system.activeWindow
  );
  const menu = getMenuByTitle(title);

  return (
    <Screen>
      <TopBar>
        <FlexContainer className="justify-start">
          <DropdownMenu
            trigger={<Button icon={<AppleLogoIcon />} />}
            menu={systemMenu}
          />
          {menu.map((item, index) => (
            <DropdownMenu
              key={item.title}
              trigger={
                <Button font={index === 0 ? "bold" : "medium"}>
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
