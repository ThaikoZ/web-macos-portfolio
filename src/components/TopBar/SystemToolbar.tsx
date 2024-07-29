import FlexContainer from "../FlexContainer";
import SystemSettings from "./SystemSettings";

const SystemToolbar = () => {
  return (
    <FlexContainer className="justify-start">
      <SystemSettings />
      {/* <ActiveWindowDetails menu={menu} /> */}
    </FlexContainer>
  );
};

export default SystemToolbar;
