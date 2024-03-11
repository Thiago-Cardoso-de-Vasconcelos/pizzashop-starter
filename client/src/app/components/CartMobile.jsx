'use client';

//context
import { useContext } from 'react';

//components
import { CartContext } from '../context/CartContext';
import CartTop from './CartTop';
import CartBottom from './CartBottom';
import CartItem from './CartItem';

const CartMobile = () => {
  const { cart, isOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } bg-white fixed w-full h-full left-0 z-20 transition-all duration-300  flex flex-col lg:hidden`}
    >
      {/* top */}
      <CartTop />
      {/* card items */}
      <div className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] ${cart.length >= 2 ? 'overflow-scroll' : ''}`}>
        {cart?.map((pizza, index) => {
          return <CartItem pizza={pizza} key={index} />;
        })}
      </div>
      {/* card bottom */}
      <CartBottom />
    </div>
  );
};

export default CartMobile;
