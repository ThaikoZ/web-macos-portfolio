import { WifiIcon } from "@/assets/icons/utility";
import { toggleWifi } from "@/store/reducers/systemSettingsSlice";
import { Store } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";

const WifiButton = () => {
  const isWifiEnabled = useSelector(
    (state: Store) => state.systemSettings.isWifiEnabled
  );
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(toggleWifi());
  };

  if (isWifiEnabled)
    return <Button icon={<WifiIcon width={19} />} onClick={handleOnClick} />;
  return (
    <Button
      icon={
        <WifiIcon
          width={19}
          className="fill-topbar-wifi-disabled transition-colors"
        />
      }
      onClick={handleOnClick}
    />
  );
};

export default WifiButton;
