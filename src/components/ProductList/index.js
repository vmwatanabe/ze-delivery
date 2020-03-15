import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    const { data } = this.props;

    if (!(data && data.length)) {
      return (
        <div className="product-list product-list--empty">
          Não foi possível carregar a lista no momento.
        </div>
      );
    }

    return (
      <div className="product-list">
        {data.map(elem => (
          <ProductCard {...elem} />
        ))}
      </div>
    );
  }
}

export default ProductList;
