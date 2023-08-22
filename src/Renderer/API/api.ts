// Get all notes
export async function getAllNotes() {
  return await window.api.getAllNotes();
}

// Get a note by id
export async function getNoteById(id: number) {
  return await window.api.getNoteById(id);
}

// Create a note
export async function createNote(
  title: string,
  actions: string,
  content: string,
  summary: string
) {
  return await window.api.createNote(title, actions, content, summary);
}

// Update a note
export async function updateNote(
  id: number,
  title: string,
  actions: string,
  content: string,
  summary: string
) {
  return await window.api.updateNote(id, title, actions, content, summary);
}

// Delete a note
export async function deleteNote(id: number) {
  return await window.api.deleteNote(id);
}
