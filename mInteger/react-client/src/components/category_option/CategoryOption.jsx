import React from 'react';

const CategoryOption = (props) => {
  const { id, name } = props.option;
  return <option value={id}>{name}</option>;
};

export default CategoryOption;