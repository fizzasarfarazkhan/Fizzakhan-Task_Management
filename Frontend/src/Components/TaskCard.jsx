// src/components/TaskCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => {
  return (
    <div className="taskcard">
      <h3>{task.title}</h3>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <Link to={`/taskdetail/${task.id}`} className="task-detail-link">
        View Details
      </Link>
    </div>
  );
};

export default TaskCard;

