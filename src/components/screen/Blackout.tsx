import { settingsSelector } from "@/store/systemSettingsSlice";
import { useSelector } from "react-redux";

const Blackout = () => {
  const { displayRange } = useSelector(settingsSelector);
  const displayOpacity = 0.7 * (1 - displayRange / 100);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${displayOpacity})`,
      }}
    ></div>
  );
};

export default Blackout;
