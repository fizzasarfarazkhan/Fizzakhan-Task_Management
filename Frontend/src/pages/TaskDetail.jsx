// src/pages/TaskDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // TODO: Replace with real API call
    const fetchTaskDetail = async () => {
      const dummyTask = {
        id,
        title: "Fix login issue",
        description: "Users are unable to log in after 5 PM.",
        status: "In Progress",
        dueDate: "2025-05-12",
        priority: "High",
        assignedTo: "Ali Khan"
      };
      setTask(dummyTask);
    };
    fetchTaskDetail();
  }, [id]);

  if (!task) return <p>Loading task details...</p>;

  return (
    <div className="taskdetail-container">
      <h2>Task Detail</h2>
      <div className="taskdetail-card">
        <h3>{task.title}</h3>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Due Date:</strong> {task.dueDate}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Assigned To:</strong> {task.assignedTo}</p>
      </div>
    </div>
  );
};

export default TaskDetail;


