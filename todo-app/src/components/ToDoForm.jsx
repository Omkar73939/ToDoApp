import React, { useState } from "react";
import "../styles/ToDoForm.css";

const ToDoForm = ({ task, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(
    task || {
      assignedTo: "",
      status: "Not Started",
      dueDate: "",
      priority: "Normal",
      description: "",
      comments: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <label>
          Assigned To:
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Priority:
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </label>
        <div className="form-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
