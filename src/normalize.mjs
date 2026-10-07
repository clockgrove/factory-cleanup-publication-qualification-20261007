export function normalizeTasks(records) {
  if (!Array.isArray(records)) {
    throw new TypeError('Tasks must be an array');
  }

  const tasks = [];
  for (const record of records) {
    if (record === null || typeof record !== 'object' || Array.isArray(record)) {
      throw new TypeError('Each task must be an object');
    }
    if (typeof record.text !== 'string') {
      throw new TypeError('Task text must be a string');
    }

    const text = record.text.trim().replace(/\s+/g, ' ');
    if (text === '') {
      throw new TypeError('Task text must not be empty');
    }

    const done = record.done === undefined ? false : record.done;
    if (typeof done !== 'boolean') {
      throw new TypeError('Task completion must be a boolean');
    }
    tasks.push({ text, done });
  }
  return tasks;
}
