import { DARK_MODE } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

interface Props {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<IconProps>;
  onToggle: () => void;
  isActive: boolean;
  iconProps?: IconProps;
}

const CardToggleButton = ({
  title,
  subtitle,
  Icon,
  iconProps,
  onToggle,
  isActive,
}: Props) => {
  const toggleActive = () => onToggle();
  const { theme } = useTheme();
  return (
    <div className="px-1.5 py-2 flex items-center gap-3 ">
      <div
        onClick={toggleActive}
        className={cn(
          { "bg-topbar-dropdown-sub-item-hovered": isActive },
          "rounded-full bg-topbar-control-card-btn-inactive w-10 h-10 flex justify-center items-center  transition-colors cursor-default"
        )}
      >
        <Icon
          {...iconProps}
          fill={isActive || theme === DARK_MODE ? "white" : "black"}
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold">{title}</span>
        <span className="text-sm opacity-50 -mt-1">{subtitle}</span>
      </div>
    </div>
  );
};

export default CardToggleButton;
