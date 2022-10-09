import React from "react";
import { useStore } from "./NotesContext";

export const NewNoteForm = () => {
  const [noteText, setNoteText] = React.useState("");
  const notesStore = useStore().get("notes");

  return (
    <>
      <input value={noteText} onChange={(e) => setNoteText(e.target.value)} type="text" />
      <button onClick={() => notesStore.addNote(noteText)}>Add note</button>
    </>
  );
};
