import client from '../db.js';

// Create a new task
export const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating task' });
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM tasks');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Update task status
export const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await client.query(
      'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating task' });
  }
};
