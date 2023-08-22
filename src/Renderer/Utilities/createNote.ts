import { createNote, updateNote } from "../API/api";
import { createNoteListItem, attachNoteEvents } from "./createNoteListItem";
import updateNotes from "./updateNote";

export default function createNoteFromForm() {
  const form = document.getElementById("note-form");
  const noteList = document.getElementById("note-list") as HTMLUListElement;

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const id = (document.getElementById("note-id") as HTMLInputElement).value;
      let title = (document.getElementById("note-title") as HTMLInputElement)
        .value;
      let actions = (
        document.getElementById("note-actions") as HTMLInputElement
      ).value;
      let content = (
        document.getElementById("note-content") as HTMLInputElement
      ).value;
      let summary = (
        document.getElementById("note-summary") as HTMLInputElement
      ).value;

      if (title === "") {
        title = "Untitled";
      }

      if (actions === "") {
        actions = "No actions";
      }

      if (content === "") {
        content = "No content";
      }

      if (summary === "") {
        summary = "No summary";
      }

      try {
        let note;
        if (!id || id === "0" || id === "" || !document.getElementById(id)) {
          note = await createNote(title, actions, content, summary);
          const listItem = createNoteListItem(note, noteList);
          attachNoteEvents(listItem, note, noteList);
        } else if (document.getElementById(id)) {
          note = await updateNote(
            parseInt(id),
            title,
            actions,
            content,
            summary
          );
          updateNotes(id, note.title);
        }
        resetFormFields();
      } catch (error) {
        console.log(error);
      }
    });
  }
}

function resetFormFields() {
  const idField = document.getElementById("note-id") as HTMLInputElement;
  const titleField = document.getElementById("note-title") as HTMLInputElement;
  const actionsField = document.getElementById(
    "note-actions"
  ) as HTMLInputElement;
  const contentField = document.getElementById(
    "note-content"
  ) as HTMLInputElement;
  const summaryField = document.getElementById(
    "note-summary"
  ) as HTMLInputElement;

  idField.value = "";
  titleField.value = "";
  actionsField.value = "";
  contentField.value = "";
  summaryField.value = "";
}
