import { cn } from "@/lib/utils";
import * as SliderRadiux from "@radix-ui/react-slider";
import { ReactNode } from "react";

interface Props {
  value: number[];
  onValueChange: (value: number) => void;
  Icon?: ReactNode;
}

const Slider = ({ value, onValueChange, Icon }: Props) => {
  const handleValueChange = (value: number[]) => onValueChange(value[0]);

  return (
    <form>
      <SliderRadiux.Root
        className="relative flex items-center select-none touch-none h-7 w-full shadow-[0px_1px_4px_0px] shadow-black/20 rounded-full"
        value={value}
        onValueChange={handleValueChange}
        max={100}
        min={1}
        step={1}
      >
        <SliderRadiux.Track className="relative grow h-full w-full bg-topbar-control-range-background rounded-full overflow-hidden shadow-inner -z-10">
          <SliderRadiux.Range
            className={cn(
              "absolute bg-topbar-control-range-active h-full left-0 -z-20",
              {
                "rounded-r-full": value[0] > 70,
              }
            )}
            style={{
              width: `${value[0] > 20 ? value[0] : value[0] + 1}%`,
            }}
          />
        </SliderRadiux.Track>
        <SliderRadiux.Thumb
          className="block w-[29px] h-[29px]  bg-white shadow-[-2px_1px_5px] shadow-black/20 rounded-full focus:outline-none border-[1px] border-gray-300 "
          aria-label="Volume"
        />
        <div className="absolute top-1.5 left-2 text-topbar-control-range-icon -z-10">
          {Icon}
        </div>
      </SliderRadiux.Root>
    </form>
  );
};

export default Slider;
