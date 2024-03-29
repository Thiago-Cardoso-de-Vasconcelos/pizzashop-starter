import React, { useState, useEffect, useContext } from 'react';
// next image
import Image from 'next/image';
// context
import { CartContext } from '../context/CartContext';

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);

  // counter
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  // close modela after 5 sec
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        //clear cart
        setCart([]);
        // close modal
        setModal(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className='h-full'>
      {successMsg ? (
        <div className='flex flex-col h-full justify-center items-center lg:h-[600px] px-6'>
          <h2 className='text-2xl font-semibold text-center'>
            Thank you! The order has been placed!
          </h2>
          <Image
            src={'/success-1.gif'}
            width={150}
            height={150}
            alt='Success'
            unoptimized
          />
          <div>
            This Window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className='lg:gap-x-8 h-full lg:px-12 lg:py-8'>
          {/* title  */}
          <h2 className='mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0'>
            Shipping & Checkout
          </h2>
          <div className='h-[86vh] lg:h-[67.5vh] flex flex-col lg:flex-row lg:gap-x-4'>
            {/* box 1  */}
            <div className='flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0'>
              {/* input wrapper */}
              <div className='flex flex-col gap-4 h-full'>
                {/* firstname & lastname */}
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='First Name'
                  />
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Last Name'
                  />
                </div>

                {/* phone & email  */}
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Phone'
                  />
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Email Address'
                  />
                </div>

                {/* street & streen no.  */}
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Street Name'
                  />
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Street No.'
                  />
                </div>

                {/* block floor & apartment */}
                <div className='flex justify-between gap-x-4'>
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Block'
                  />
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Floor'
                  />
                  <input
                    type='text'
                    className='w-full input'
                    placeholder='Apt. No.'
                  />
                </div>

                {/* textarea */}
                <div className='flex-1 h-full'>
                  <textarea
                    className='textarea w-full h-full'
                    placeholder='Mentions (optional)'
                  ></textarea>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className=' flex-1 h-full lg:h-[100%] lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0'>
              <div className='border rounded-lg flex flex-col mb-4 p-4 h-full'>
                <h3 className='text-base font-extrabold uppercase mb-4 border-b pb-2'>
                  Your order
                </h3>
                {/* items  */}
                <div className='overflow-y-scroll overflow-hidden font-semibold flex flex-col gap-y-2 h-[130px] lg:h-[240px] py-2'>
                  {cart.map((pizza, index) => {
                    return (
                      <div
                        className='flex justify-between text-[15px]'
                        key={index}
                      >
                        <div className='flex gap-x-2'>
                          <div className='capitalize'>{pizza.name}</div>
                          <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* place order btn  */}
              <button
                onClick={() => setSuccessMsg(true)}
                className=' btn btn-lg gradient w-f'
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutDetails;
