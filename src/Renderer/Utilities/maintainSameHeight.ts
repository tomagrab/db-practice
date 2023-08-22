export default function maintainSameHeight() {
  const noteActions = document.getElementById(
    "note-actions"
  ) as HTMLTextAreaElement;
  const noteContent = document.getElementById(
    "note-content"
  ) as HTMLTextAreaElement;

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === noteActions) {
        noteContent.style.height = `${noteActions.offsetHeight}px`;
      } else if (entry.target === noteContent) {
        noteActions.style.height = `${noteContent.offsetHeight}px`;
      }
    }
  });

  resizeObserver.observe(noteActions);
  resizeObserver.observe(noteContent);
}
