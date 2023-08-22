import { createNote, getAllNotes, getNoteById } from "./Renderer/API/api";
import createNoteFromForm from "./Renderer/Utilities/createNote";
import displayAllNotes from "./Renderer/Utilities/displayAllNotes";
import "./index.scss";

console.log(
  '👋 This message is being logged by "renderer.ts", included via Vite'
);

createNote(
  "My test note",
  "This is my test action",
  "This is my test content",
  "This is my test summary"
).then((note) => {
  console.log(note);
});

getNoteById(1).then((note) => {
  console.log(note);
});

document.addEventListener("DOMContentLoaded", () => {
  displayAllNotes();
  createNoteFromForm();
});
