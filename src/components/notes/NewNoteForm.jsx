import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/use-store";
import useTranslate from "../../hooks/use-translate";
import NoteItem from "./NoteItem";

export const NewNoteForm = observer(() => {
  const lang = useTranslate().lang();

  const [noteText, setNoteText] = React.useState("");
  const notesStore = useStore().get("notes");

  return (
    <>
      <ul style={{ width: "100%", margin: 0, padding: 0 }}>
        {notesStore.notes.map((note) => (
          <NoteItem note={note} key={note.id} />
        ))}
      </ul>
      <h3>{lang.notes.title}</h3>
      <input value={noteText} onChange={(e) => setNoteText(e.target.value)} type="text" />
      <button onClick={() => notesStore.addNote(noteText)}>{lang.notes.buttons.add}</button>
    </>
  );
});
