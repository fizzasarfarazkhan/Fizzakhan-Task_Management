// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import '../App.css';

const Dashboard = () => {
  const [taskCounts, setTaskCounts] = useState({
    completed: 0,
    inProgress: 0,
    pending: 0,
  });

  useEffect(() => {
    // TODO: Replace with real API call based on user role
    // Dummy data for now
    const fetchTaskCounts = async () => {
      try {
        const response = {
          completed: 5,
          inProgress: 3,
          pending: 2,
        };
        setTaskCounts(response);
      } catch (err) {
        console.error("Error fetching task counts", err);
      }
    };

    fetchTaskCounts();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="task-counts">
        <div className="task-card completed">
          <h3>Completed</h3>
          <p>{taskCounts.completed}</p>
        </div>
        <div className="task-card in-progress">
          <h3>In Progress</h3>
          <p>{taskCounts.inProgress}</p>
        </div>
        <div className="task-card pending">
          <h3>Pending</h3>
          <p>{taskCounts.pending}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


