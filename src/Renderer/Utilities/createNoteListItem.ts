import { deleteNote, getNoteById } from "../API/api";
import { Note } from "../Types/Note";

export function createNoteListItem(
  note: Note,
  noteList: HTMLUListElement
): HTMLLIElement {
  const listItem = document.createElement("li");
  listItem.classList.add("note-item");
  listItem.setAttribute("id", `${note.id}`);

  const noteElement = document.createElement("a");
  noteElement.classList.add("note");
  noteElement.innerHTML = `${note.title}`;

  const deleteBTN = document.createElement("button");
  deleteBTN.classList.add("delete-note");
  deleteBTN.innerHTML = "❌";

  listItem.appendChild(noteElement);
  listItem.appendChild(deleteBTN);
  noteList.appendChild(listItem);

  return listItem;
}

export function attachNoteEvents(
  listItem: HTMLLIElement,
  note: Note,
  noteList: HTMLUListElement
) {
  const deleteBTN = listItem.querySelector(".delete-note");
  const noteElement = listItem.querySelector(".note");

  deleteBTN?.addEventListener("click", async () => {
    try {
      await deleteNote(note.id);
      noteList.removeChild(listItem);
    } catch (error) {
      console.log(error);
    }
  });

  noteElement?.addEventListener("click", async () => {
    const noteToUpdate = await getNoteById(note.id);
    populateFormWithNoteData(noteToUpdate);
  });
}

function populateFormWithNoteData(note: Note) {
  const form = document.getElementById("note-form") as HTMLFormElement;

  if (form) {
    (document.getElementById("note-id") as HTMLInputElement).value =
      note.id.toString();
    (document.getElementById("note-title") as HTMLInputElement).value =
      note.title;
    (document.getElementById("note-actions") as HTMLTextAreaElement).value =
      note.actions;
    (document.getElementById("note-content") as HTMLTextAreaElement).value =
      note.content;
    (document.getElementById("note-summary") as HTMLTextAreaElement).value =
      note.summary;
  }
}
