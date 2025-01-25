// backend/models/Task.js

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'Pending' },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;  // Use export default
