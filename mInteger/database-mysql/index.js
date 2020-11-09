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
  getCategory
};
