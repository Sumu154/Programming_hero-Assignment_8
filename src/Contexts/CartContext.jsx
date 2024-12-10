import React, { createContext, useState } from 'react';

export const CartContext = createContext();


const CartProvider = ( {children} ) => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <CartContext.Provider value={ {cart, setCart} }>
        {children}
      </CartContext.Provider>
  
    </div>
  );
};

export default CartProvider;