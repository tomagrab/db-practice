import { createNote, deleteNote } from "../API/api";

export default async function createNoteFromForm() {
  const form = document.getElementById("note-form");
  const noteList = document.getElementById("note-list");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const id = document.getElementById("note-id") as HTMLInputElement;
      const title = document.getElementById("note-title") as HTMLInputElement;
      const actions = document.getElementById(
        "note-actions"
      ) as HTMLInputElement;
      const content = document.getElementById(
        "note-content"
      ) as HTMLInputElement;
      const summary = document.getElementById(
        "note-summary"
      ) as HTMLInputElement;

      const note = {
        title: title.value,
        actions: actions.value,
        content: content.value,
        summary: summary.value,
      };

      createNote(note.title, note.actions, note.content, note.summary)
        .then((note) => {
          title.value = "";
          actions.value = "";
          content.value = "";
          summary.value = "";

          const listItem = document.createElement("li");

          const noteID = document.createElement("input");
          noteID.setAttribute("type", "hidden");
          noteID.setAttribute("value", `${note.id}`);

          const noteElement = document.createElement("a");
          noteElement.classList.add("note");
          noteElement.innerHTML = `${note.title}`;

          const deleteBTN = document.createElement("button");
          deleteBTN.classList.add("delete-note");
          deleteBTN.innerHTML = "❌";

          listItem.appendChild(noteID);
          listItem.appendChild(noteElement);
          listItem.appendChild(deleteBTN);
          noteList.appendChild(listItem);

          deleteBTN.addEventListener("click", () => {
            deleteNote(note.id)
              .then(() => {
                noteList.removeChild(listItem);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}
