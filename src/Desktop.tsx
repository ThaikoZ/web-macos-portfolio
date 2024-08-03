import Dock from "./components/dock/Dock";
import Screen from "./components/screen/Screen";
import TopBar from "./components/topbar/TopBar";
import View from "./components/view/View";

const Desktop = () => {
  return (
    <Screen>
      <TopBar />

      <View />
      {/* Right panel */}
      {/* ScreenView */}
      {/* Bottom Dock */}
      <Dock />
    </Screen>
  );
};

export default Desktop;
