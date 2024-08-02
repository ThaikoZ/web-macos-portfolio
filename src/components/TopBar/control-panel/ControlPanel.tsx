import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "../../ui/Button";
import {
  BluetoothIcon,
  ControlPanelIcon,
  ThemeModeIcon,
  AirDropIcon,
  WifiIcon,
} from "../../../assets/icons/utility";
import Card from "./ControlPanelCard";
import CardButton from "./CardButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useTheme } from "../../../hooks/useTheme";
import {
  toggleAirdrop,
  toggleBluetooth,
  toggleWifi,
} from "../../../store/reducers/systemSettingsSlice";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const { isAirdropEnabled, isWifiEnabled, isBluetoothEnabled } = useSelector(
    (state: RootState) => state.systemSettings
  );
  const { theme, toggleTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="h-full">
          <Button icon={<ControlPanelIcon width={20} />} />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="dropdown-menu grid grid-cols-12 gap-2.5 !p-2 !rounded-xl min-w-fit me-2"
        >
          <Card className="col-span-6 row-span-2">
            <CardButton
              title="Wi-Fi"
              subtitle="Home"
              onToggle={() => dispatch(toggleWifi())}
              isActive={isWifiEnabled}
              Icon={WifiIcon}
              iconProps={{ width: 21, height: 21, fill: "black" }}
            />
            <CardButton
              title="Bluetooth"
              subtitle={isBluetoothEnabled ? "On" : "Off"}
              onToggle={() => dispatch(toggleBluetooth())}
              isActive={isBluetoothEnabled}
              Icon={BluetoothIcon}
              iconProps={{ width: 20, height: 20, fill: "blue" }}
            />
            <CardButton
              title="AirDrop"
              subtitle={isAirdropEnabled ? "Everyone" : "Off"}
              onToggle={() => dispatch(toggleAirdrop())}
              isActive={isAirdropEnabled}
              Icon={AirDropIcon}
              iconProps={{ width: 24, height: 24, fill: "black" }}
            />
          </Card>
          <Card className="col-span-6">
            <CardButton
              title="Dark Mode"
              subtitle={theme === "dark" ? "On" : "Off"}
              onToggle={() => toggleTheme()}
              isActive={theme === "dark"}
              Icon={ThemeModeIcon}
              iconProps={{ width: 20, height: 20, fill: "red" }}
            />
          </Card>
          <Card className="col-span-3">dwa</Card>
          <Card className="col-span-3">dwa</Card>
          <Card className="col-span-12" title="Display">
            dwa
          </Card>
          <Card className="col-span-12" title="Sound">
            dwa
          </Card>
          <Card className="col-span-12">dwa</Card>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ControlPanel;
