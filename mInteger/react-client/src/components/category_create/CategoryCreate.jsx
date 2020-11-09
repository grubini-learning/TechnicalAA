import React from 'react';

const CategoryCreate = (props) => {
  const { name = '', budget = '' } = props.values;
  const { onNameChange = () => { }, onBudgetChange = () => { } } = props.change;
  return (
    <div className="category-form">
      <div className="category-input">
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Budget Category"
        />
        <input
          type="number"
          value={budget}
          onChange={(e) => onBudgetChange(e.target.value)}
          placeholder="Target Budget"
          min={0.00}
          step={.01}
        />
      </div>
      <button onClick={() => props.click()}>+</button>
      <button onClick={() => props.generate()}>Generate Chart</button>
    </div>
  );
};

export default CategoryCreate;