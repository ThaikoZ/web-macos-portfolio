import Dock from "../components/dock/Dock";
import Screen from "../components/screen/Screen";
import TopBar from "../components/topbar/TopBar";
import Desk from "../components/desk/Desk";
import { DeskProvider } from "@/providers/DeskProvider";

const DesktopPage = () => {
  return (
    <DeskProvider>
      <Screen>
        <TopBar />
        <Desk />
        {/* Right panel */}
        <Dock />
      </Screen>
    </DeskProvider>
  );
};

export default DesktopPage;
