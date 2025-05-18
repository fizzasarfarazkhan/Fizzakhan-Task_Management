// src/components/TaskListHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TaskListHeader = () => {
  return (
    <div className="tasklist-header">
      <h2>Your Tasks</h2>
      <Link to="/newtask" className="create-task-button">
        + Create New Task
      </Link>
    </div>
  );
};

export default TaskListHeader;
