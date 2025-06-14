// src/components/CategorySelector.js
import React from 'react';

const categories = [
  'React', 'Node.js', 'Computer Networks', 'DBMS',
  'Aptitude', 'Operating Systems', 'Data Structures and Algorithms',
  'C++',  'Python', 'JavaScript', 
];

const CategorySelector = ({ onSelect }) => {
  return (
    <div className="category-selector">
      <h2>Select a category:</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat} className="category-card" onClick={() => onSelect(cat)}>
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
