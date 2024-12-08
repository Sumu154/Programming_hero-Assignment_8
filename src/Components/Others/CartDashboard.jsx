import React, { useContext } from 'react';
import { PiSortDescendingDuotone } from "react-icons/pi";
import { CartContext } from '../../Contexts/CartContext';
import { CiCircleRemove } from "react-icons/ci";



const CartDashboard = () => {
  const {cart} = useContext(CartContext);


  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold mb-10"> Cart </h5>
        <div className="flex gap-3 items-center">
          <h5 className="text-lg font-bold"> Total cost: {} </h5>
          <button className="flex gap-1 items-center">Sort by Price <PiSortDescendingDuotone /> </button>
          <button> Purchase </button>
        </div>
      </div>

      {/* show the cart list */}
      {cart.map(it => {
        const  {image, price, title, description} = it;

        return (
          <div className="bg-white p-3 flex gap-5 items-center max-w-[980px] mx-auto rounded-lg mt-4">
            <img className="w-[150px]" src={image} alt="" />
            <div>
              <h5 className="text-xl font-bold mb-1"> {title} </h5>
              <p className="opacity-60 mb-1"> {description} </p>
              <p className="opacity-80 font-bold"> Price: ${price} </p>
            </div>
            <div className="text-red-600 text-3xl px-6 ml-auto"> <CiCircleRemove /> </div>
          </div>
        )
      })}

    </div>
  );
};

export default CartDashboard;