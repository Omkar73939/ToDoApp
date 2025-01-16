import React from "react";
import "../styles/DeleteModal.css";

const DeleteModal = ({ task, onClose, onConfirm }) => {
  return (
    <div className="delete-modal">
      <div className="modal-content">
        <h2>Delete</h2>
        <p>Do you want to delete task {task.assignedTo}?</p>
        <div className="modal-actions">
          <button onClick={onClose}>No</button>
          <button onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
