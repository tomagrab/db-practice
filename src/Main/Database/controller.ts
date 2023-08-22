import { ipcMain } from "electron";
import { db } from "./db";

// Get all notes
ipcMain.handle("getAllNotes", async (event, args) => {
  return await db.note.findMany();
});

// Get a note by id
ipcMain.handle("getNoteById", async (event, args) => {
  return await db.note.findUnique({
    where: {
      id: args.id,
    },
  });
});

// Create a note
ipcMain.handle("createNote", async (event, args) => {
  return await db.note.create({
    data: {
      title: args.title,
      actions: args.actions,
      content: args.content,
      summary: args.summary,
    },
  });
});

// Update a note
ipcMain.handle("updateNote", async (event, args) => {
  return await db.note.update({
    where: {
      id: args.id,
    },
    data: {
      title: args.title,
      actions: args.actions,
      content: args.content,
      summary: args.summary,
    },
  });
});

// Delete a note
ipcMain.handle("deleteNote", async (event, args) => {
  return await db.note.delete({
    where: {
      id: args.id,
    },
  });
});
