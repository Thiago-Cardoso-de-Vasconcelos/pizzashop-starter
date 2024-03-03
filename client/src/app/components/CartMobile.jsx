"use client"

import { useContext } from "react";
//context
import { CartContext } from "../context/CartContext";

const CartMobile = () => {
  const { isOpen } = useContext(CartContext);
  return <div>CartMobile</div>;
};

export default CartMobile;
