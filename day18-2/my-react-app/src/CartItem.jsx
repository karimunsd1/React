import React from 'react';
import { useCart } from './CartContext';

function CartItem({ item }) {
  const { increaseItemQuantity, decreaseItemQuantity } = useCart();

  return (
    <div style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => increaseItemQuantity(item.id)}>+</button>
      <button onClick={() => decreaseItemQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
      
    </div>
  );
}

export default CartItem;



//Child 