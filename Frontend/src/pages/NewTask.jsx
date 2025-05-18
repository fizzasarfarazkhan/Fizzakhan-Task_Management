// src/pages/NewTask.jsx
import React, { useState } from 'react';
import TaskForm from '../Components/TaskForm';
import '../App.css';

const NewTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    assignedTo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add API call to submit task
    console.log('Task submitted:', taskData);
  };

  return (
    <div className="newtask-container">
      <h2>Create New Task</h2>
      <TaskForm 
        taskData={taskData} 
        handleInputChange={handleInputChange} 
        handleFormSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default NewTask;


