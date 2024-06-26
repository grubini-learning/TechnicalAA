const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllTransactions = function(callback) {
  // TODO - your code here!
  const sql = "SELECT * FROM transactions";
  connection.query(sql, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const postTransaction = (transaction, callback) => {
  const sql = "INSERT INTO transactions SET date=?, amount=?, description=?";
  connection.query(sql, [transaction.date, transaction.amount, transaction.description], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const updateTransactionCategory = (id, category_id, callback) => {
  const sql = "UPDATE transactions SET category_id=? WHERE id=?";
  connection.query(sql, [category_id, id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const insertCategory = (category, callback) => {
  const sql = "INSERT INTO categories SET name=?, target_budget=?";
  const { name, target_budget } = category;
  connection.query(sql, [name, target_budget], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getCategories = (callback) => {
  const sql = "SELECT * FROM categories";
  connection.query(sql, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getCategory = (id, callback) => {
  const sql = "SELECT * FROM categories WHERE id=?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getAllTransactions,
  insertCategory,
  postTransaction,
  updateTransactionCategory,
  getCategories,
  getCategory
};
