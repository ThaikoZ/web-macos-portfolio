import { cn } from "@/lib/utils";

interface Props {
  shortcut: string;
  className?: string;
}

const Shortcut = ({ shortcut, className, ...props }: Props) => {
  const shortcuts = shortcut!.split("+");

  const getShortcut = (command: string) => {
    switch (command) {
      case "CMD":
        return "⌘";
      case "SHIFT":
        return "⇧";
      case "CAPSLOCK":
        return "⇪";
      case "CTRL":
        return "⌃";
      case "ALT":
        return "⌥";
      case "BACKSPACE":
        return "⌫";
      case "ESC":
        return "⎋";
      default:
        return command;
    }
  };

  return (
    <div
      className={cn(
        className,
        "flex gap-[1px] text-topbar-dropdown-shortcut-text"
      )}
      {...props}
    >
      {shortcuts.map((item) => (
        <span key={item}>{getShortcut(item)}</span>
      ))}
    </div>
  );
};

export default Shortcut;
