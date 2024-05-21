import React, { useContext } from 'react';
import './ShoppingCart.css';
import { CartContext } from './context/CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, calculateTotal } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Rs:{item.price}/- x {item.quantity}{' '}
            <button onClick={() => removeFromCart(item.id)}>
              {item.quantity > 1 ? '-' : 'Remove'}
            </button>
          </li>
        ))}
      </ul>
      <p>Total: Rs:{calculateTotal().toFixed(2)}/-</p>
    </div>
  );
};

export default ShoppingCart;