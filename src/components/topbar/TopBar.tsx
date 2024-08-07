import {
  AirDropIcon,
  AppleLogoIcon,
  BluetoothIcon,
  SpotlightIcon,
  UserAccountIcon,
} from "@/assets/icons/utility";
import useDesk from "@/hooks/useDesk";
import { settingsSelector } from "@/store/systemSettingsSlice";
import { cn } from "@/utils/cn";
import systemMenu from "menus/systemMenu";
import { useSelector } from "react-redux";
import FlexContainer from "../FlexContainer";
import BatteryButton from "./BatteryButton";
import ControlPanel from "./control-panel/ControlPanel";
import DateTimeButton from "./DateTimeButton";
import Button from "./ui/Button";
import DropdownMenu from "./ui/DropdownMenu";
import WifiButton from "./WifiButton";

const TopBar = () => {
  const { isAirdropEnabled, isBluetoothEnabled } =
    useSelector(settingsSelector);
  const { activeWindow } = useDesk();

  const renderMenuItems = () =>
    activeWindow.menu.map((item, index) => (
      <DropdownMenu
        key={item.title}
        trigger={
          <Button font={index === 0 ? "!font-bold" : ""}>{item.title}</Button>
        }
        menu={item}
      />
    ));

  return (
    <div
      className={cn(
        "bg-topbar-background text-topbar-text z-10",
        "w-full h-[1.8rem] px-[0.4rem] flex",
        "before:backdrop-blur-xl before:absolute before:-z-20 before:left-0 before:top-0 before:w-full before:h-[1.8rem]"
      )}
    >
      <div className="w-full flex justify-between">
        <FlexContainer className="justify-start">
          <DropdownMenu
            trigger={<Button icon={<AppleLogoIcon />} />}
            menu={systemMenu}
          />
          {renderMenuItems()}
        </FlexContainer>
        <FlexContainer>
          {isAirdropEnabled && <Button icon={<AirDropIcon width={20} />} />}
          {isBluetoothEnabled && <Button icon={<BluetoothIcon width={16} />} />}
          <BatteryButton />
          <WifiButton />
          <Button icon={<SpotlightIcon width={17} />} />
          <Button icon={<UserAccountIcon />} />
          <ControlPanel />
          <DateTimeButton />
        </FlexContainer>
      </div>
    </div>
  );
};

export default TopBar;
