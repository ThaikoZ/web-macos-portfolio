import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import clsx from "clsx";

const Separator = () => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

  return (
    <div className="mx-[1rem] my-[0.3rem]">
      <div
        className={clsx(
          "w-full border-b-[1px] border-opacity-10",
          { "border-black ": !darkMode },
          { "border-white": darkMode }
        )}
      ></div>
    </div>
  );
};

export default Separator;
