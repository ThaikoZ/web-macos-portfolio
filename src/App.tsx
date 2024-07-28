import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";
import appleIcon from "./assets/icons/apple-logo.svg";
import Button from "./components/ui/Button";
import FlexContainer from "./components/FlexContainer";
import { useSelector } from "react-redux";
import Dropdown from "./components/ui/Dropdown/Dropdown";
import { RootState } from "./store/store";
import { getMenuByTitle } from "./utils/getMenuByTitle";
import { appleMenu } from "./apps/appleMenu";
import { settings, user, spotlight, batteryFull } from "./assets/icons/utility";
import WifiButton from "./components/TopBar/WifiButton";

const App = () => {
  const { title } = useSelector(
    (state: RootState) => state.system.activeWindow
  );
  const menu = getMenuByTitle(title);

  return (
    <Screen>
      <TopBar>
        <FlexContainer className="justify-start">
          <Dropdown trigger={<Button icon={appleIcon} />} menu={appleMenu} />
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
            <Button icon={batteryFull} imgWidth="24px" />
            <WifiButton />
            <Button icon={spotlight} imgWidth="17px" />
            <Button icon={user} imgWidth="17px" />
            <Button icon={settings} imgWidth="17px" />
            <ul className="flex">
              <Button>
                <div className="flex gap-2.5">
                  <span>Mon Jun 5</span>
                  <span>9:41 AM</span>
                </div>
              </Button>
            </ul>
          </div>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleDarkMode());
            }}
          >
            Switch Mode
          </button> */}
        </FlexContainer>
        {/* Right panel */}
      </TopBar>
      {/* ScreenView */}
      {/* Bottom Dock */}
    </Screen>
  );
};

export default App;
