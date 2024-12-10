import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { PiSortDescendingDuotone } from "react-icons/pi";
import { CiCircleRemove } from "react-icons/ci";

import { CartContext } from '../../Contexts/CartContext';
import { TotalcostContext } from '../../Contexts/TotalcostContext';


import successImg from '../../assets/images/Group.png'

const CartDashboard = () => {
  const { cart, setCart } = useContext(CartContext);
  const { totalcost, setTotalcost } = useContext(TotalcostContext);

  const [ isDisabled, SetIsDisabled ] = useState(false);



  const handleRemoveCart = (id, price) => {
    setTotalcost(totalcost-price);
    
    const index = cart.findIndex((it) => {
      return it.id === id;
    })
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);       // index theke shuru kore ekta element delete korbe
  }

  const handleSortCart = () => {
    const sortedCart = [...cart].sort((a, b) => {
      return b.price - a.price;
    })
    setCart(sortedCart);
  }

  const handlePurchase = () => {
    setCart([]);   
  }



  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold mb-10"> Cart </h5>
        <div className="flex gap-3 items-center">
          <h5 className="text-lg font-bold"> Total cost: {totalcost} </h5>
          <button onClick={handleSortCart} className="flex gap-1 items-center text-purple font-semibold border-[1px] border-purple rounded-2xl px-3 py-1 ">Sort by Price <PiSortDescendingDuotone /> </button>
          <button disabled={totalcost===0} onClick={()=> {document.getElementById('my_modal_1').showModal(); handlePurchase(); }} className="bg-purple text-white font-semibold px-4 py-1 rounded-2xl"> Purchase </button>

          {/* modal showing */}
          <dialog id="my_modal_1" className="modal max-w-[320px] mx-auto">
            <div className="modal-box">
              <div className="text-blacktext text-center">
                <img className="w-12 mx-auto mb-2" src={successImg} alt="" />
                <h5 className="font-bold text-xl mb-2"> Payment Successfully </h5>
                <hr />
                <p className="opacity-60 mt-2"> Thanks for purchasing. </p>
                <p className="opacity-60"> Total: {totalcost} </p>
              </div>
              <div className="modal-action justify-center">
                <form method="dialog">
                  <Link to="/"> <button onClick={()=> setTotalcost(0)} className="bg-whitetext font-semibold mx-auto px-20 py-1 rounded-2xl">Close</button> </Link>
                </form>
              </div>
            </div>
          </dialog>

        </div>
      </div>

      {/* show the cart list */}
      {cart.map(it => {
        const  {id, image, price, title, description} = it;

        return (
          <div className="bg-white p-3 flex flex-col md:flex-row gap-5 items-center max-w-[980px] mx-auto rounded-lg mt-4">
            <img className="w-[150px]" src={image} alt="" />
            <div>
              <h5 className="text-xl font-bold mb-1"> {title} </h5>
              <p className="opacity-60 mb-1"> {description} </p>
              <p className="opacity-80 font-bold"> Price: ${price} </p>
            </div>
            <div onClick={()=>handleRemoveCart(id, price)} className="text-red-600 text-3xl px-6 ml-auto"> <CiCircleRemove /> </div>
          </div>
        )
      })}

    </div>
  );
};

export default CartDashboard;