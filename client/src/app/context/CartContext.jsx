'use client';

import React, { createContext, useState } from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);
  //cart state
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = (id, image, name, price, addtionalTopping, size, crust) => {
    // sort additionalTopping array by name
    addtionalTopping.sort((a, b) => a.name.localeCompare(b.name));

    const newItem = {
        id, image, name, price, addtionalTopping, size, crust, amount: 1
    }

    const cartItemIndex = cart.findIndex(
    (item)=> 
    item.id === id &&
    item.price === price &&
    item.size === size &&
    // check if additionalTopping array is equal
    JSON.stringify(item.addtionalTopping)  ===
    JSON.stringify(addtionalTopping) &&
    item.crust === crust
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }


    // open the cart everytime you add a product
    setIsOpen(true);
     
    console.log(cart)
     
  };

  // remove item 
  const removeItem = (id, price, crust) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price && item.crust === crust
    );
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  }

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;