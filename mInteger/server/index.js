const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const cors = require('./middleware/cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
// app.get('/', (req, res, next) => {

// });
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// UNCOMMENT FOR BACKBONE
// app.use(express.static(__dirname + '/../backbone-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/api/transactions', (req, res) => {
  //TODO - your code here!
  db.getAllTransactions((error, records) => {
    if (error) {
      res.status(404).send();
    } else {
      res.status(200).send(records);
    }
  });
  // console.log('im getting here')
});

app.get('/api/getCategories', (req, res, next) => {
  db.getCategories((error, records) => {
    if (error) {
      res.status(404).send();
    } else {
      res.status(200).send(records);
    }
  });
});

app.post('/api/createCategory', (req, res) => {
  const { category } = req.body;
  db.insertCategory(category, (err, record) => {
    if (err) {
      res.status(404).send();
    } else {
      db.getCategory(record.insertId, (err, record) => {
        if (err) {
          res.status(404).send();
        } else {
          res.status(200).send(record);
        }
      });
    }
  });
});

app.post('/api/updateTransactionCategory', (req, res, next) => {
  const { id, category_id } = req.body;
  db.updateTransactionCategory(id, category_id, (err, record) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(record);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
