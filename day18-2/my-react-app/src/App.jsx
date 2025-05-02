import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartProvider, useCart } from './CartContext';
import CartItem from './CartItem';



function Cart() {                       //renders a list of items in the shopping cart
  const { cartItems } = useCart();        //hook that uses useContext(CartContext) inside & (cartItems)It is a value from context

  return (
    <div style={{ padding: '2rem'}}>
      <h1 style={{margin: '12px'}}>Shopping Cart</h1>
      {cartItems.map(item => (                        //Loops through the cartItems array in the cart reurns new cartoitem compo
        <CartItem key={item.id} item={item} />             //CartItem is a child component receives item as prop
      ))}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Cart />                       
    </CartProvider>
  );
}
//It wraps around <Cart />, giving it and all its children access to cart-related state and functions like cartItems, increaseItemQuantity
export default App;





//Top-level Parent