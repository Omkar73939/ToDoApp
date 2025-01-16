// App.jsx
import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import DeleteModal from "./components/DeleteModal";
import "./App.css";

const App = () => {
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

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = () => {
    setCurrentTask(null);
    setIsFormOpen(true);
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setIsFormOpen(true);
  };

  const handleDeleteTask = (task) => {
    setCurrentTask(task);
    setIsDeleteModalOpen(true);
  };

  const saveTask = (task) => {
    if (task.id) {
      // Update existing task
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      // Add new task
      const newTask = {
        ...task,
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1, // Generate unique ID
      };
      setTasks([...tasks, newTask]);
    }
    setIsFormOpen(false); // Close the form
  };

  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== currentTask.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="app">
      <h1>To Do App</h1>
      <ToDoList
        tasks={tasks}
        onAdd={handleAddTask}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
      {isFormOpen && (
        <ToDoForm
          task={currentTask}
          onSave={saveTask}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          task={currentTask}
          onConfirm={deleteTask}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
