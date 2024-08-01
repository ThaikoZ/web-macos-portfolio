import { cn } from "@/lib/utils";
import { getMenuByTitle } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FlexContainer from "../FlexContainer";
import Button from "../ui/Button";
import {
  AirDropIcon,
  AppleLogoIcon,
  BluetoothIcon,
  SpotlightIcon,
  UserAccountIcon,
} from "@/assets/icons/utility";
import { systemMenu } from "@/apps/systemMenu";
import DropdownMenu from "../ui/DropdownMenu";
import BatteryButton from "./BatteryButton";
import WifiButton from "./WifiButton";
import SettingsPanel from "./control-panel/ControlPanel";

const TopBar = () => {
  const { activeWindowTitle, isAirdropEnabled, isBluetoothEnabled } =
    useSelector((state: RootState) => state.systemSettings);
  const menu = getMenuByTitle(activeWindowTitle);

  return (
    <div
      className={cn(
        "bg-topbar-background text-topbar-text",
        "w-full h-[1.8rem] px-[0.4rem] flex z-10",
        "before:backdrop-blur-xl before:absolute before:z-[-10px] before:left-0 before:top-0 before:w-full before:h-[1.8rem]"
      )}
    >
      <div className="z-[5] w-full flex justify-between">
        <FlexContainer className="justify-start ">
          <DropdownMenu
            trigger={<Button icon={<AppleLogoIcon />} />}
            menu={systemMenu}
          />
          {menu.map((item, index) => (
            <DropdownMenu
              key={item.title}
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
          {isAirdropEnabled && <Button icon={<AirDropIcon width={20} />} />}
          {isBluetoothEnabled && <Button icon={<BluetoothIcon width={16} />} />}
          <BatteryButton />
          <WifiButton />
          <Button icon={<SpotlightIcon width={17} />} />
          <Button icon={<UserAccountIcon />} />
          <SettingsPanel />

          <ul className="flex">
            <Button>
              <div className="flex gap-2.5">
                <span>Mon Jun 5</span>
                <span>9:41 AM</span>
              </div>
            </Button>
          </ul>
        </FlexContainer>
      </div>
    </div>
  );
};

export default TopBar;
