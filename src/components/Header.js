import React from 'react';

const Header = ({ setGrouping, setSorting }) => {
  const handleGroupingChange = (e) => {
    const value = e.target.value;
    setGrouping(value);
    localStorage.setItem('grouping', value);
  };

  const handleSortingChange = (e) => {
    const value = e.target.value;
    setSorting(value);
    localStorage.setItem('sorting', value);
  };

  return (
    <div className="header">
      <label>Group by:</label>
      <select onChange={handleGroupingChange}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>

      <label>Sort by:</label>
      <select onChange={handleSortingChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default Header;
