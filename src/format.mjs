export function formatTask(task) {
  const text = task.text.replace(/[\\\[\]]/g, character => `\\${character}`);
  return `${task.done ? '- [x] ' : '- [ ] '}${text}`;
}
