export default async function updateNotes(listItemID: string, content: string) {
  const listItem = document.getElementById(listItemID);
  if (listItem) {
    const note = listItem.querySelector(".note") as HTMLAnchorElement;

    note.textContent = content;
  }
}
