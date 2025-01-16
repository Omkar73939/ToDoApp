import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import DeleteModal from "./DeleteModal";
import "../styles/ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      assignedTo: "User 1",
      status: "Completed",
      dueDate: "2024-10-12",
      priority: "Low",
      comments: "This task is good",
    },
    {
      id: 2,
      assignedTo: "User 2",
      status: "In Progress",
      dueDate: "2024-09-14",
      priority: "High",
      comments: "This task is good",
    },
    {
      id: 3,
      assignedTo: "User 3",
      status: "Not Started",
      dueDate: "2024-08-18",
      priority: "Low",
      comments: "This task is good",
    },
    {
      id: 4,
      assignedTo: "User 4",
      status: "In Progress",
      dueDate: "2024-06-12",
      priority: "Normal",
      comments: "This task is good",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  const handleDelete = (task) => {
    setSelectedTask(task);
    setShowDeleteModal(true);
  };

  const handleFormSubmit = (updatedTask) => {
    if (updatedTask.id) {
      // Edit existing task
      setTasks(
        tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    } else {
      // Add new task
      updatedTask.id = tasks.length + 1;
      setTasks([...tasks, updatedTask]);
    }
    setShowForm(false);
  };

  const handleConfirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== selectedTask.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="task-list">
      <h1>Tasks</h1>
      <button onClick={() => setShowForm(true)} className="new-task-button">
        New Task
      </button>
      <table>
        <thead>
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments || "No comments"}</td>
              <td>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <ToDoForm
          task={selectedTask}
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          task={selectedTask}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ToDoList;
