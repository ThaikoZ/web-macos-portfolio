const Shortcut = ({ shortcut }: { shortcut: string }) => {
  const shortcuts = shortcut.split("+");

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
        return "←";
      case "ESC":
        return "⎋";
      default:
        return command;
    }
  };

  return (
    <div className="flex gap-[2px] text-gray-400">
      {shortcuts.map((item) => (
        <span key={item}>{getShortcut(item)}</span>
      ))}
    </div>
  );
};

export default Shortcut;
