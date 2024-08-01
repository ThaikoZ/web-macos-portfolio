import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleWifi } from "../../store/reducers/systemSettingsSlice";
import { WifiIcon } from "../../assets/icons/utility";

const WifiButton = () => {
  const isWifiEnabled = useSelector(
    (state: RootState) => state.systemSettings.isWifiEnabled
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
