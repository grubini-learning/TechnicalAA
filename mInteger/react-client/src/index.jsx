import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

import data from './dummy_data.js';
import CategoryList from './components/category_list/CategoryList.jsx';

import TransactionList from './components/TransactionList.jsx';
// f

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      categories: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/api/transactions')
      .then(result => result.data)
      .then(transactions => this.setState({ transactions }))
      .catch(error => console.log(error));
    axios.get('http://127.0.0.1:3000/api/getCategories')
      .then(result => result.data)
      .then(categories => this.setState({ categories }))
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
      .then(data => console.log(data))
      .catch(error => console.log(error));
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
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
