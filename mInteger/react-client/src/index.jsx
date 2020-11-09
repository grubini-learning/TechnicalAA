import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import c3 from '../../c3js/c3.min.js';

import data from './dummy_data.js';
import CategoryList from './components/category_list/CategoryList.jsx';

import TransactionList from './components/TransactionList.jsx';
// f

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      categories: [],
      actual: [],
      budget: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/api/transactions')
      .then(result => result.data)
      .then(transactions => {
        const actual = transactions.map(transaction => transaction.amount);
        this.setState({ transactions, actual });
      })
      .catch(error => console.log(error));
    axios.get('http://127.0.0.1:3000/api/getCategories')
      .then(result => result.data)
      .then(categories => {
        const budget = categories.map(el => el.target_budget);
        this.setState({ categories, budget });
      })
      .catch(e => console.log(e));
  }

  onSubmit(category) {
    const payload = { category };
    axios.post('http://127.0.0.1:3000/api/createCategory', payload)
      .then(result => result.data)
      .then(data => data[0])
      .then(category => {
        const { name, target_budget } = category;
        const categories = [...this.state.categories, { name, target_budget }];
        this.setState({ categories });
      })
      .catch(error => console.log(error));
  }
  onSelect(payload) {
    axios.post('http://127.0.0.1:3000/api/updateTransactionCategory', payload)
      .then(result => result.data)
      .then(data => {
        let categories = [...this.state.categories];
        const category = categories.find(el => el.id === payload.category_id);
        categories = categories.filter(el => el.id !== category.id);
        this.setState({ categories: [category, ...categories] }, () => { console.log(this.state.categories) });
      })
      .catch(error => console.log(error));
  }

  onGenerateChart() {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['budget', ...this.state.budget],
          ['actual', ...this.state.actual]
        ]
      }
    });
  }

  onUpload(file) {
    console.log(file);
    const formData = new FormData();
    formData.append("file", 'transact.csv');
    formData.append("file", file);
    axios
      .post('http://127.0.0.1:3000/api/uploadTransactions', formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  }

  render() {
    return (
      <div>
        <h1>mInteger</h1>
        <div className="app">
          <TransactionList
            transactions={this.state.transactions}
            categories={this.state.categories}
            select={this.onSelect.bind(this)}
          />
          <div className="category">
            <h3>Budget Categories</h3>
            <CategoryList
              categories={this.state.categories}
              submit={this.onSubmit.bind(this)}
              generate={this.onGenerateChart.bind(this)}
              upload={this.onUpload.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
