import React from 'react';
import TransactionRow from './transaction_row/TransactionRow.jsx';

const TransactionList = (props) => {
  const { transactions = [] } = props;
  return (
    <div className="txn">
      <h3>Transactions</h3>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Date</div>
          <div className="txn-data">Description</div>
          <div className="txn-data">Amount</div>
        </div>
        {
          transactions.map((item, index) => <TransactionRow key={index} transaction={item} />)
        }
      </div>
    </div>
  );
}

export default TransactionList;
