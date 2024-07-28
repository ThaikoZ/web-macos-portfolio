import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleWifi } from "../../store/reducers/systemSettingsSlice";
import WifiIcon from "../../assets/icons/utility/WifiIcon";

const WifiButton = () => {
  const isWifiEnabled = useSelector(
    (state: RootState) => state.system.settings.isWifiEnabled
  );
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(toggleWifi());
  };

  if (isWifiEnabled)
    return <Button Icon={<WifiIcon width={19} />} onClick={handleOnClick} />;
  return (
    <Button
      Icon={<WifiIcon width={19} className="fill-zinc-400" />}
      onClick={handleOnClick}
    />
  );
};

export default WifiButton;
