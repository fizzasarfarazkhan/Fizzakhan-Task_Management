// src/components/TaskDetailCard.jsx
import React from 'react';

const TaskDetailCard = ({ task }) => {
  return (
    <div className="task-detail-card">
      <h2>{task.title}</h2>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Assigned To:</strong> {task.assignedTo}</p>
    </div>
  );
};

export default TaskDetailCard;
