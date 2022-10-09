import React from "react";
import "./App.css";
import { NewNoteForm } from "./NewNoteForm";
import { useStore } from "./NotesContext";
import { observer } from "mobx-react-lite";
import Counter from "./Counter";
import { Auth } from "./Auth";

const App = observer(() => {
  const notesStore = useStore().get("notes");

  return (
    <>
      <ul>
        {notesStore.notes.map((note) => (
          <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>
            {note.text}
          </li>
        ))}
      </ul>
      <NewNoteForm />
      <Counter />
      <Auth />
    </>
  );
});

export default App;
