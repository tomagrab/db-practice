console.log("👋 Preload is running");

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getAllNotes: async () => {
    return await ipcRenderer.invoke("getAllNotes");
  },
  getNoteById: async (id: number) => {
    return await ipcRenderer.invoke("getNoteById", { id });
  },
  createNote: async (
    title: string,
    actions: string,
    content: string,
    summary: string
  ) => {
    return await ipcRenderer.invoke("createNote", {
      title,
      actions,
      content,
      summary,
    });
  },
  updateNote: async (
    id: number,
    title: string,
    actions: string,
    content: string,
    summary: string
  ) => {
    return await ipcRenderer.invoke("updateNote", {
      id,
      title,
      actions,
      content,
      summary,
    });
  },
  deleteNote: async (id: number) => {
    return await ipcRenderer.invoke("deleteNote", { id });
  },
});
