import {
  AirDropIcon,
  BluetoothIcon,
  ControlPanelIcon,
  ThemeModeIcon,
  WifiIcon,
} from "@/assets/icons/utility";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import CardToggleButton from "./CardToggleButton";
import Card from "./ControlPanelCard";

import { DARK_MODE, LIGHT_MODE } from "@/constants/theme";
import {
  setDisplayRange,
  setSoundRange,
  setTheme,
  settingsSelector,
  toggleAirdrop,
  toggleBluetooth,
  toggleWifi,
} from "@/store/systemSettingsSlice";
import { SpeakerLoudIcon, SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import CardContainer from "./CardContainer";
import FullscreenButton from "./FullscreenButton";
import MusicPlayer from "./MusicPlayer";
import Slider from "./Slider";

const ControlPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    isAirdropEnabled,
    isWifiEnabled,
    isBluetoothEnabled,
    displayRange,
    theme,
    soundRange,
  } = useSelector(settingsSelector);

  const handleChangeTheme = () => {
    const nextTheme = theme == LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
    dispatch(setTheme(nextTheme));
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <DropdownMenu.Root onOpenChange={handleOpenChange}>
      <DropdownMenu.Trigger asChild>
        <div className="h-full">
          <Button pressed={isOpen} icon={<ControlPanelIcon width={20} />} />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="window grid grid-cols-12 gap-2.5 !p-2 !rounded-xl min-w-fit me-1 z-30"
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
              onToggle={handleChangeTheme}
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
