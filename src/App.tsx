import Screen from "./components/Screen";
import TopBar from "./components/TopBar/TopBar";
import icon from "./assets/apple-logo.svg";
import Button from "./components/Button";
import FlexContainer from "./components/FlexContainer";
import Dropdown, {
  DropdownItemInterface,
} from "./components/Dropdown/Dropdown";

const appleOptions: DropdownItemInterface[] = [
  { id: "apple", title: "Apple", href: "#" },
  { id: "dwa", title: "Dwa", href: "#" },
  { id: "3", title: "Three", href: "#" },
];

const App = () => {
  return (
    <Screen>
      <TopBar>
        <FlexContainer className="justify-start space-x-2">
          <Dropdown
            trigger={<Button icon={icon} onClick={() => {}} />}
            menu={appleOptions}
          />
          <Button className="font-semibold">Finder</Button>
          <Button>File</Button>
          <Button>Edit</Button>
          <Button>View</Button>
          <Button>Go</Button>
          <Button>Window</Button>
          <Button>Help</Button>
        </FlexContainer>
        <div>Panel prawy</div>
        {/* Apple Dropdown menu */}
        {/* Horizontal Active menu items*/}
        {/* Right panel */}
      </TopBar>
      {/* ScreenView */}
      {/* Bottom Dock */}
      <h4>Hello world</h4>
    </Screen>
  );
};

export default App;
