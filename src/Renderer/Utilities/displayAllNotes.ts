import { getAllNotes } from "../API/api";
import { createNoteListItem, attachNoteEvents } from "./createNoteListItem";

export default async function displayAllNotes() {
  const notes = await getAllNotes();
  const noteList = document.getElementById("note-list") as HTMLUListElement;

  if (noteList) {
    notes.forEach((note) => {
      const listItem = createNoteListItem(note, noteList);
      attachNoteEvents(listItem, note, noteList);
    });
  }
}
