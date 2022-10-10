import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import { makeLoggable } from "mobx-log";

class NotesStore {
  notes: any = [];

  constructor() {}

  init() {
    makeAutoObservable(this);
    makeLoggable(this);
    return this;
  }

  addNote(text: string) {
    this.notes.push({
      text,
      id: nanoid(),
    });
  }

  removeNote(id: string) {
    this.notes = this.notes.filter((note: any) => note.id !== id);
  }
}

export default NotesStore;
