import React from 'react';
import CategoryOption from '../category_option/CategoryOption.jsx';

const TranscationRow = (props) => {
  const { id, date, description, amount, category_id } = props.transaction;
  const { categories = [] } = props;

  const filterName = () => {
    const found = categories.find(el => el.id === category_id);
    return (found) ? found : 'none';
  }
  const cat = filterName();
  return (
    <div className="txn-header txn-row">
      <div className="txn-data">{date}</div>
      <div className="txn-data">{description}</div>
      <div className="txn-data">{amount}</div>
      <div className="txn-data">
        <select id="categories" name="categories" onChange={(e) => props.select({ id, category_id: Number(e.target.value) })}>
          <option value={(cat !== 'none') ? cat.id : '0'}>{(cat !== 'none') ? cat.name : cat}</option>
          {
            categories.map(item => <CategoryOption
              key={item.id}
              option={item} />)
          }
        </select>
      </div>
    </div>
  );
};

export default TranscationRow;