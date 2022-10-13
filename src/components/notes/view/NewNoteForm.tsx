import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useStore } from "../../../hooks/use-store";
import useTranslate from "../../../hooks/use-translate";
import { NoteItem } from "./NoteItem";

export const NoteForm = observer(() => {
  const lang = useTranslate().lang() as any;

  const notesStore = useStore().get("NotesViewModel");

  const callbacks = {
    onChange: useCallback((e: any) => notesStore.setNoteText(e.target.value), []),
    onAddNote: useCallback(() => notesStore.addNote(), []),
  };

  return (
    <>
      <h3>{lang.notes.title}</h3>
      <ul style={{ width: "100%", margin: 0, padding: 0 }}>
        {notesStore.notes.map((note: any) => (
          <NoteItem note={note} key={note.id} />
        ))}
      </ul>
      <input value={notesStore.noteText} onChange={callbacks.onChange} type="text" />
      <button onClick={callbacks.onAddNote}>{lang.notes.buttons.add}</button>
    </>
  );
});
