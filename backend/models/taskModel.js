// backend/models/taskModel.js
import db from '../database/pg.js';

export const getTasks = async () => {
  return db.any('SELECT * FROM tasks');
};

export const createTask = async (title, description) => {
  const result = await db.none('INSERT INTO tasks(title, description) VALUES($1, $2)', [title, description]);
  return result;
};

export const updateTaskStatus = async (id, status) => {
  const result = await db.none('UPDATE tasks SET status = $1 WHERE id = $2', [status, id]);
  return result;
};
