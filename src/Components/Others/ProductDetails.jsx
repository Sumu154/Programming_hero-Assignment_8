import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RatingStars from './RatingStars';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

import { CartContext } from '../../Contexts/CartContext';

const ProductDetails = ({ product }) => {
  const {id, title, image, price, description, specification, availability, rating} = product;

  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log(product);
    // cart.pusproducth();
  }


  return (
    <div className="max-w-[80%] mx-auto bg-white p-4 rounded-2xl -mt-24">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div  className="w-[90%] sm:w-[40%]">
          <img className="object-cover mx-auto" src={image} alt="" />
        </div>
        <div className="w-full sm:w-[60%]">
          <h3 className="text-2xl font-bold mb-2"> {title} </h3>
          <p className="opacity-80 font-semibold mb-2"> Price: ${price} </p>
          {/* conditional render */}
          {availability ? (<span className="bg-backgreen text-green text-sm font-semibold border-[1px] border-green rounded-3xl px-3 py-1"> In Stock </span>) 
                        : (<span className="bg-backgreen text-green text-sm font-semibold border-[1px] border-green rounded-3xl px-3 py-1"> Sold Out </span>)}

          <p className="opacity-60 my-2"> {description} </p>

          <p className="text-lg font-bold mt-3 mb-1"> Specification </p>
          <ul className="list-decimal opacity-60 text-sm px-4">
            {specification.map(it => {
              return <li> {it} </li>
            })}
          </ul>

          <p className="text-lg font-bold mt-3"> Rating </p>
          <div className="flex  gap-3 items-center"> 
            <RatingStars rating={rating}></RatingStars>
            <span className="bg-slate-200 text-[12px] opacity-80 font-bold px-3 py-1 rounded-3xl"> {rating} </span>
          </div>

          <div className="flex gap-4 items-center my-3">
            <button onClick={handleAddToCart} className="bg-purple text-white font-bold flex items-center gap-2 px-3 py-1 rounded-2xl"> Add to Card <AiOutlineShoppingCart /> </button>
            <div className="h-9 w-9 rounded-full bg-white text-black flex justify-center items-center border-[1px] border-blacktext border-opacity-15"> <IoMdHeartEmpty /> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;