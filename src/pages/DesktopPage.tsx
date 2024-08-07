import Dock from "../components/dock/Dock";
import Screen from "../components/screen/Screen";
import TopBar from "../components/topbar/TopBar";
import Desktop from "../components/desktop/Desktop";

const DesktopPage = () => {
  return (
    <Screen>
      <TopBar />
      <Desktop />
      {/* Right panel */}
      {/* ScreenView */}
      {/* Bottom Dock */}
      <Dock />
    </Screen>
  );
};

export default DesktopPage;
