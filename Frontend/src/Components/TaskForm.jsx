// src/components/TaskForm.jsx
import React from 'react';

const TaskForm = ({ taskData, handleInputChange, handleFormSubmit }) => {
  return (
    <form className="taskform" onSubmit={handleFormSubmit}>
      <div className="taskform-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={taskData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="taskform-field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={taskData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="taskform-field">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={taskData.priority}
          onChange={handleInputChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="taskform-field">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="taskform-field">
        <label htmlFor="assignedTo">Assigned To</label>
        <input
          type="text"
          id="assignedTo"
          name="assignedTo"
          value={taskData.assignedTo}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="taskform-button">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;

