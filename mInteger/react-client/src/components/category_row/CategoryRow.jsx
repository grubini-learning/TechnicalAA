import React from 'react';

const CategoryRow = (props) => {
  const { name = '' } = props.category;
  return (
    <div className="category-data">{name}</div>
  );
};

export default CategoryRow;