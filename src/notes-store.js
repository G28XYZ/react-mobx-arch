import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

class NotesStore {
  notes = [];

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    console.log("init notes");
  }

  addNote(text) {
    this.notes.push({
      text,
      id: nanoid(),
    });
  }

  removeNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}

export default NotesStore;
