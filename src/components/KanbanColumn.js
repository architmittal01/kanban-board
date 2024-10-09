import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanColumn = ({ group, tickets }) => {
  return (
    <div className="kanban-column">
      <h2>{group}</h2>
      {tickets.map(ticket => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
