// src/ToDoList.js

import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h3>To-Do List</h3>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a new task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={addTask}
                        >
                            Add Task
                        </button>
                    </div>
                    <ul className="list-group">
                        {tasks.map((task, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {task}
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeTask(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;
