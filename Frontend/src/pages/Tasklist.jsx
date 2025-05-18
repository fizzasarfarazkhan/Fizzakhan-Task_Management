// src/pages/TaskList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import '../App.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
  });

  useEffect(() => {
    // Fetch tasks from backend
    const fetchTasks = async () => {
      // Placeholder for actual API call
      const fetchedTasks = [
        { id: 1, title: 'Task 1', priority: 'High', status: 'In Progress' },
        { id: 2, title: 'Task 2', priority: 'Low', status: 'Pending' },
        // Add more dummy tasks here
      ];
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (filters.status ? task.status === filters.status : true) &&
      (filters.priority ? task.priority === filters.priority : true)
    );
  });

  return (
    <div className="tasklist-container">
      <h2>Task List</h2>
      <div className="filters">
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="">All Statuses</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
        <select
          name="priority"
          value={filters.priority}
          onChange={handleFilterChange}
        >
          <option value="">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="tasklist">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <Link to="/newtask" className="new-task-button">
        Create New Task
      </Link>
    </div>
  );
};

export default TaskList;
