import React, { Component } from 'react';
import axios from 'axios';
import data from '../../category_data.js';
import CategoryRow from '../category_row/CategoryRow.jsx';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.setState({ categories: data });
  }

  render() {
    return (
      <div className="category-list">
        {
          this.state.categories.map((item, index) => <CategoryRow
            key={index}
            category={item} />)
        }
      </div>
    );
  }
}

export default CategoryList;