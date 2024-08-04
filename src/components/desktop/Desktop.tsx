import Window from "../screen/Window";

const Desktop = () => {
  return (
    <div className="h-auto grid grid-cols-12 grid-rows-9">
      <Window defalutSize={{ width: 500, height: 300 }} title="Finder">
        Content
      </Window>
    </div>
  );
};

export default Desktop;
