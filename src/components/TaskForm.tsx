import React, { useState } from 'react';
import { TaskFormProps } from '../types';

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask, isLoading }) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        disabled={isLoading}
        aria-label="New task description"
      />
      <button 
        type="submit"
        className="add-button" 
        disabled={isLoading || !newTask.trim()}
        aria-label="Add new task"
      >
        {isLoading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;