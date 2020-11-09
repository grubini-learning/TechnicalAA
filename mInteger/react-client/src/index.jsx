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
      transactions: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/api/transactions')
      .then(result => result.data)
      .then(transactions => this.setState({ transactions }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>mInteger</h1>
        <div className="app">
          <TransactionList transactions={this.state.transactions} />
          <div className="category">
            <h3>Budget Categories</h3>
            <CategoryList />
            <div className="category-form">
              <div className="category-input">
                <input
                  type="text"
                  placeholder="Budget Category"
                />
                <input
                  type="number"
                  placeholder="Target Budget"
                />
              </div>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
