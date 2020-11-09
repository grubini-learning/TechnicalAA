import React, { Component } from 'react';
import axios from 'axios';
import data from '../../category_data.js';
import CategoryRow from '../category_row/CategoryRow.jsx';
import CategoryCreate from '../category_create/CategoryCreate.jsx';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: {
        name: '',
        target_budget: ''
      }
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/api/getCategories')
      .then(result => result.data)
      .then(categories => this.setState({ categories }))
      .catch(e => console.log(e));
  }

  onNameHandler(name) {
    this.setState({ category: { ...this.state.category, name } });
  }
  onBudgetHandler(budget) {
    this.setState({ category: { ...this.state.category, target_budget: budget } });
  }
  onSubmit() {
    const payload = { category: this.state.category };
    axios.post('http://127.0.0.1:3000/api/createCategory', payload)
      .then(result => result.data)
      .then(data => data[0])
      .then(category => {
        const { name, target_budget } = category;
        const categories = [...this.state.categories, { name, target_budget }];
        this.setState({ categories, category: { name: '', target_budget: '' } });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <div className="category-list">
          {
            this.state.categories.map((item, index) => <CategoryRow
              key={index}
              category={item} />)
          }
        </div>
        <CategoryCreate
          values={{ name: this.state.category.name, budget: this.state.category.target_budget }}
          change={{ onNameChange: this.onNameHandler.bind(this), onBudgetChange: this.onBudgetHandler.bind(this) }}
          click={this.onSubmit.bind(this)}
        />
      </>
    );
  }
}

export default CategoryList;