import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { useStore } from "../../hooks/use-store";

const NoteItem = observer(({ note }: any) => {
  const notesStore = useStore().get("notes");

  const callbacks = {
    onRemoveNote: useCallback(() => notesStore.removeNote(note.id), []),
  };

  return (
    <li style={{ display: "flex", justifyContent: "space-between", border: "1px solid black" }}>
      <div>{note.text}</div>
      <button onClick={callbacks.onRemoveNote}>X</button>
    </li>
  );
});

export default NoteItem;
