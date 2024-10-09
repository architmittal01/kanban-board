import React from 'react';
import KanbanColumn from './KanbanColumn';

const groupTickets = (tickets, grouping) => {
  if (!Array.isArray(tickets)) {
    return {};
  }

  switch (grouping) {
    case 'status':
      return tickets.reduce((groups, ticket) => {
        const group = ticket.status || 'Unassigned';
        groups[group] = groups[group] || [];
        groups[group].push(ticket);
        return groups;
      }, {});
    case 'user':
      return tickets.reduce((groups, ticket) => {
        const group = ticket.user || 'Unassigned';
        groups[group] = groups[group] || [];
        groups[group].push(ticket);
        return groups;
      }, {});
    case 'priority':
      return tickets.reduce((groups, ticket) => {
        const group = ticket.priority || 'No priority';
        groups[group] = groups[group] || [];
        groups[group].push(ticket);
        return groups;
      }, {});
    default:
      return {};
  }
};

const KanbanBoard = ({ tickets, grouping, sorting }) => {
  const groupedTickets = groupTickets(tickets, grouping);

  const sortedTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sorting === 'priority') return b.priority - a.priority;
      if (sorting === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <KanbanColumn
          key={group}
          group={group}
          tickets={sortedTickets(groupedTickets[group])}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
