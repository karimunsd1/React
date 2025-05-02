import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();          //Import createContext and initialize it               

export function CartProvider({ children }) {            //Will use a Context Provider to pass this state and updater functions to any child components
  const [cartItems, setCartItems] = useState([           //children is a special React prop that includes any nested components inside
    { id: 1, name: 'Product A', quantity: 1 },
    { id: 2, name: 'Product B', quantity: 2 },
  ]);

  const increaseItemQuantity = (itemId) => {
    setCartItems(prev =>                            //setCartItems is a state updater function from useState
      prev.map(item =>                                 //used to create a new array by looping through each item in the cart
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }            //copy all existing properties of the item
          : item
      )
    );
  };

  const decreaseItemQuantity = (itemId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


// when we wrap any comp with this provider tht compo and all children comp inside that compo will have the same context
  return (
    <CartContext.Provider value={{ cartItems, increaseItemQuantity, decreaseItemQuantity }}>
      {children}                                                                         
    </CartContext.Provider>                        
  );
}

export function useCart() {
  return useContext(CartContext);
}

//Parent 