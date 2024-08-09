import AppWrapper from "@/components/desk/AppWrapper";
import { NotesConfig } from "./Config";
import Sidebar from "./components/Sidebar";
import TextArea from "./components/TextArea";
import NoteList from "./components/NoteList";
import Note from "./components/Note";
import { NoteType } from "./entities";

const notes: NoteType[] = [
  {
    id: "0",
    header: "#finances",
    subtitle: "#accountantquestion",
    time: "17:10",
  },
  {
    id: "1",
    header: "#tax #test",
    subtitle: "#mysterioso",
    time: "17:10",
  },
];

const App = () => {
  return (
    <AppWrapper config={NotesConfig}>
      <div id="finder" className="h-full bg-notes-background ">
        <div className="flex items-center border-b-[1px] h-8 border-border">
          -
        </div>
        <div className="flex h-full ">
          <Sidebar>
            <NoteList>
              {notes.map((note) => (
                <Note key={note.id} note={note} />
              ))}
            </NoteList>
          </Sidebar>
          <TextArea />
        </div>
      </div>
    </AppWrapper>
  );
};

export default App;
