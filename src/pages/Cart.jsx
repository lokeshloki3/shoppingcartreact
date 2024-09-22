// import React from 'react'

// export default () => {
//   return (
//     <div>Cart</div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const {cart}= useSelector((state)=>state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
    {
      cart.length > 0 ?
      (
        <div className="flex justify-center items-start">
          <div>
          {
            cart.map( (item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            } )
          }
          </div>

          <div className="h-screen flex flex-col justify-between w-[450px] p-14">
            <div>
              <div className="uppercase text-green-600 font-bold">Your Cart</div>
              <div className="uppercase text-green-600 text-4xl font-bold pb-5">Summary</div>
              <p>
                <span className="font-bold">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="pb-5">
              <p className="font-medium">Total Amount: </p>
              <p className="font-bold">${totalAmount}</p>
              <button className="text-white w-full text-xs font-semibold
               bg-green-600 uppercase py-3 px-7 rounded-lg">
                CheckOut Now
              </button>
            </div>
          </div> 
        </div>
      ) :
      (
        <div className="flex flex-col justify-center items-center h-96">
          <h1 className="font-bold mb-5">Cart Empty</h1>
          <Link to={"/"}>
            <button className="text-white text-xs font-semibold bg-green-600 uppercase 
            py-3 px-7 rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      )
    }
    </div>
  )
}

export default Cart