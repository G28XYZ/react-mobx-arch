import { observable, runInAction } from "mobx";
import { Service } from "typedi";
import { nanoid } from "nanoid";
import ModelStore from "../../../store/model-store";

const NotesProps = {
  notes: observable,
  noteText: observable,
};

@Service("NotesViewModel")
export class NotesViewModel extends ModelStore {
  initialProps = NotesProps;
  notes: any = [];
  noteText: string = "";

  setNoteText(text: string) {
    runInAction(() => (this.noteText = text));
  }

  addNote() {
    this.noteText &&
      runInAction(() => {
        this.notes.push({
          text: this.noteText,
          id: nanoid(),
        });
        this.noteText = "";
      });
  }

  removeNote(id: string) {
    runInAction(() => (this.notes = this.notes.filter((note: any) => note.id !== id)));
  }
}
