import React, { useContext } from 'react';
import './ProductCatalog.css';
import ShoppingCart from './ShoppingCart';
import { CartContext } from './context/CartContext';

const ProductCatalog = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Cap',
      price: 250,
      image: '/product1.jpg',
    },
    {
      id: 2,
      name: 'Jersey',
      price: 500,
      image: '/product2.jpg',
    },

    {
        id: 3,
        name: 'Mug',
        price: 350,
        image: '/product3.jpg',
      },

  ];

  return (
    <div className="product-catalog">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs:{product.price}/-</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <ShoppingCart />
    </div>
  );
};

export default ProductCatalog;