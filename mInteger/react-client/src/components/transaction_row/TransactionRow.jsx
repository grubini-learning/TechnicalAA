import React from 'react';

const TranscationRow = (props) => {
  const { date, description, amount } = props.transaction;
  return (
    <div className="txn-header txn-row">
      <div className="txn-data">{date}</div>
      <div className="txn-data">{description}</div>
      <div className="txn-data">{amount}</div>
      <div className="txn-data">{'none'}</div>
    </div>
  );
};

export default TranscationRow;