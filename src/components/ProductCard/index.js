import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ images, title, productVariants }) => {
  const mainImageURL = images && images.length && images[0].url;

  const { price } = productVariants[0];

  return (
    <div className="product-card">
      <div className="product-card__photo">
        <img src={mainImageURL} />
      </div>
      <div className="product-card__info">
        <div className="title">{title}</div>
        <div className="price">R$ {price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
