import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "../ui/Button";
import {
  BluetoothIcon,
  ControlPanelIcon,
  ThemeModeIcon,
  AirDropIcon,
  WifiIcon,
} from "@/assets/icons/utility";
import Card from "./ControlPanelCard";
import CardToggleButton from "./CardToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "@/store/store";

import {
  setDisplayRange,
  setSoundRange,
  toggleAirdrop,
  toggleBluetooth,
  toggleWifi,
} from "@/store/reducers/systemSettingsSlice";
import { useTheme } from "@/hooks/useTheme";
import { DARK_MODE } from "@/constants/theme";
import FullscreenButton from "./FullscreenButton";
import CardContainer from "./CardContainer";
import { SpeakerLoudIcon, SunIcon } from "@radix-ui/react-icons";
import Slider from "./Slider";
import MusicPlayer from "./MusicPlayer";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const {
    isAirdropEnabled,
    isWifiEnabled,
    isBluetoothEnabled,
    displayRange,
    soundRange,
  } = useSelector((state: Store) => state.systemSettings);
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
          className="window grid grid-cols-12 gap-2.5 !p-2 !rounded-xl min-w-fit me-1"
        >
          <Card className="col-span-6 row-span-2">
            <CardToggleButton
              title="Wi-Fi"
              subtitle="Home"
              onToggle={() => dispatch(toggleWifi())}
              isActive={isWifiEnabled}
              Icon={WifiIcon}
              iconProps={{ width: 21, height: 21, fill: "black" }}
            />
            <CardToggleButton
              title="Bluetooth"
              subtitle={isBluetoothEnabled ? "On" : "Off"}
              onToggle={() => dispatch(toggleBluetooth())}
              isActive={isBluetoothEnabled}
              Icon={BluetoothIcon}
              iconProps={{ width: 20, height: 20 }}
            />
            <CardToggleButton
              title="AirDrop"
              subtitle={isAirdropEnabled ? "Everyone" : "Off"}
              onToggle={() => dispatch(toggleAirdrop())}
              isActive={isAirdropEnabled}
              Icon={AirDropIcon}
              iconProps={{ width: 24, height: 24 }}
            />
          </Card>
          <Card className="col-span-6 ">
            <CardToggleButton
              title="Dark Mode"
              subtitle={theme === DARK_MODE ? "On" : "Off"}
              onToggle={() => toggleTheme()}
              isActive={theme === DARK_MODE}
              Icon={ThemeModeIcon}
              iconProps={{ width: 20, height: 20, fill: "red" }}
            />
          </Card>
          <Card className="col-span-3 ">
            <CardContainer>
              <span className="-mt-1.5">
                <SunIcon
                  fill="black"
                  viewBox="0 0 16 0.5"
                  width={28}
                  height={28}
                />
              </span>
              <span className="mt-1.5">
                Keyboard
                <br />
                Brightness
              </span>
            </CardContainer>
          </Card>
          <Card className="col-span-3">
            <FullscreenButton />
          </Card>
          <Card className="col-span-12 gap-1.5 px-4 py-3" title="Display">
            <Slider
              value={[displayRange]}
              onValueChange={(value: number) =>
                dispatch(setDisplayRange(value))
              }
              Icon={<SunIcon />}
            />
          </Card>
          <Card className="col-span-12 gap-1.5 px-4 py-3" title="Sound">
            <Slider
              value={[soundRange]}
              onValueChange={(value: number) => dispatch(setSoundRange(value))}
              Icon={<SpeakerLoudIcon />}
            />
          </Card>
          <Card className="col-span-12">
            <MusicPlayer />
          </Card>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ControlPanel;
