console.log("👋 Preload is running");

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getAllNotes: async () => {
    return await ipcRenderer.invoke("getAllNotes");
  },
});
