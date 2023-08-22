import { deleteNote, getAllNotes } from "../API/api";

export default async function displayAllNotes() {
  const notes = await getAllNotes();
  const noteList = document.getElementById("note-list");

  if (noteList) {
    notes.forEach((note) => {
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
    });
  }
}
