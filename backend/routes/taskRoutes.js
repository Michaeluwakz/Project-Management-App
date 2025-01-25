import express from 'express';
import {
  createTask,
  getTasks,
  updateTaskStatus,
} from '../controllers/taskController.js';

const router = express.Router();

router.post('/tasks', createTask); // Create a new task
router.get('/tasks', getTasks);    // Get all tasks
router.put('/tasks/:id', updateTaskStatus); // Update task status

export default router;
