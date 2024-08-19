import AppWrapper from "@/components/desk/AppWrapper";
import { UnsplashConfig } from "./Config";

const App = () => {
  return (
    <AppWrapper config={UnsplashConfig}>
      <iframe
        className="w-full h-full bg-white"
        src="https://unsplash-web.netlify.app/"
      />
    </AppWrapper>
  );
};

export default App;
