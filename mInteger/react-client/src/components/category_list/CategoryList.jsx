import React, { Component } from 'react';
import axios from 'axios';
import data from '../../category_data.js';
import CategoryRow from '../category_row/CategoryRow.jsx';
import CategoryCreate from '../category_create/CategoryCreate.jsx';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        name: '',
        target_budget: ''
      }
    }
  }

  onNameHandler(name) {
    this.setState({ category: { ...this.state.category, name } });
  }
  onBudgetHandler(budget) {
    this.setState({ category: { ...this.state.category, target_budget: budget } });
  }
  onClear() {
    this.props.submit(this.state.category);
    this.setState({ category: { name: '', target_budget: '' } })
  }


  render() {
    return (
      <>
        <div className="category-list">
          {
            this.props.categories.map((item, index) => <CategoryRow
              key={index}
              category={item} />)
          }
        </div>
        <CategoryCreate
          values={{ name: this.state.category.name, budget: this.state.category.target_budget }}
          change={{ onNameChange: this.onNameHandler.bind(this), onBudgetChange: this.onBudgetHandler.bind(this) }}
          click={this.onClear.bind(this)}
          generate={this.props.generate}
          upload={this.props.upload}
        />
      </>
    );
  }
}

export default CategoryList;