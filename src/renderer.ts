import createNoteFromForm from "./Renderer/Utilities/createNote";
import displayAllNotes from "./Renderer/Utilities/displayAllNotes";
import "./index.scss";

console.log(
  '👋 This message is being logged by "renderer.ts", included via Vite'
);

document.addEventListener("DOMContentLoaded", () => {
  displayAllNotes();
  createNoteFromForm();
});
