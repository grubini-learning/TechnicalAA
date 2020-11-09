import React from 'react';
import CategoryOption from '../category_option/CategoryOption.jsx';

const TranscationRow = (props) => {
  const { date, description, amount } = props.transaction;
  const { categories = [] } = props;
  return (
    <div className="txn-header txn-row">
      <div className="txn-data">{date}</div>
      <div className="txn-data">{description}</div>
      <div className="txn-data">{amount}</div>
      <div className="txn-data">
        <select id="categories" name="categories">
          <option value="0">none</option>
          {
            categories.map(item => <CategoryOption key={item.id} option={item} />)
          }
        </select>
      </div>
    </div>
  );
};

export default TranscationRow;