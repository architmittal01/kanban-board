import React from 'react';
// Import the image
import profileImage from './download.jpeg'; // Adjust the path as necessary

const KanbanCard = ({ ticket }) => {
  return (
    <div className="kanban-card">
      {/* Profile picture */}
      <img
        src={profileImage} // Use the imported image
        alt="Profile" // Adding alt text for accessibility
        className="profile-picture-top-right"
      />

      {/* Card content */}
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user || 'Unassigned'}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default KanbanCard;
