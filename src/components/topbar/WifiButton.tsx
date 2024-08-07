import { WifiIcon } from "@/assets/icons/utility";
import { settingsSelector, toggleWifi } from "@/store/systemSettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import { cn } from "@/utils/cn";

const WifiButton = () => {
  const { isWifiEnabled } = useSelector(settingsSelector);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(toggleWifi());
  };

  return (
    <Button
      icon={
        <WifiIcon
          width={19}
          className={cn({
            "fill-topbar-wifi-disabled transition-colors": !isWifiEnabled,
          })}
        />
      }
      onClick={handleOnClick}
    />
  );
};

export default WifiButton;
