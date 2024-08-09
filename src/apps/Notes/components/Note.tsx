import { FileTextIcon } from "@radix-ui/react-icons";
import { NoteType } from "../entities";

const Note = ({ note }: { note: NoteType }) => {
  return (
    <div className="hover:bg-notes-note-selected transition-colors rounded-lg overflow-hidden px-7 py-2.5 text-[17px] font-normal">
      <h1 className="font-extrabold text-lg">{note.header}</h1>
      <div className="flex gap-3">
        <h2>{note.time}</h2>
        <h3 className="text-notes-subtitle">{note.subtitle}</h3>
      </div>
      <div className="flex gap-1.5 items-center text-notes-subtitle">
        <span>
          <FileTextIcon width={20} height={20} />
        </span>
        <span>Notes</span>
      </div>
    </div>
  );
};

export default Note;
