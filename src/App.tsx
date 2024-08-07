import DesktopPage from "pages/DesktopPage";
import Providers from "providers/Providers.tsx";

const App = () => {
  return (
    <Providers>
      <DesktopPage />;
    </Providers>
  );
};

export default App;
