import React, { useContext, useState } from 'react';
import RatingStars from './RatingStars';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { toast } from 'react-toastify';

import { CartContext } from '../../Contexts/CartContext';
import { WishlistContext } from '../../Contexts/WishlistContext';
import { TotalcostContext } from '../../Contexts/TotalcostContext';
import { CommentContext } from '../../Contexts/CommentContext';


const ProductDetails = ({ product }) => {
  const {id, title, image, price, description, specification, availability, rating} = product;

  const { cart, setCart } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { totalcost, setTotalcost } = useContext(TotalcostContext)
  const { comments, setComments } = useContext(CommentContext);

  // new jei comment add hbe oita manage er jonne
  const [ newComment, setNewComment ] = useState('');



  // functions
  const handleAddToCart = () => {
    console.log(product);
    setTotalcost(totalcost+price);
    setCart([...cart, product]);

    toast.success('Product added successfully!', {
      position: "top-center",
      theme: "dark",
    });
  }

  const handleAddToWishlist = () => {
    // console.log(product);
    if(wishlist.some((it) => it.id==id)){
      toast.error(`Wish already added!`, {
        position: "top-center",
        theme: "dark",
      });
      return;
    }
    setWishlist([...wishlist, product]);

    toast.success('Wish added successfully!', {
      position: "top-center",
      theme: "dark",
    });
  }

  const handleAddComment = () => {
    if(newComment.trim() === ''){
      return;
    }
    // console.log(newComment);
    const commentObject = {
      prodId: id,
      prodTitle: title,
      commentText: newComment,
    }

    setComments([...comments, commentObject]);
    setNewComment('');  // clear the variable and input feild
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
            <div onClick={handleAddToWishlist} className="h-9 w-9 rounded-full bg-white text-black flex justify-center items-center border-[1px] border-blacktext border-opacity-15"> <IoMdHeartEmpty /> </div>
          </div>
        </div>
      </div>

      {/* comment */}
      <div className="w-full md:max-w-[80%]">
        <p className="ml-auto underline text-purple font-semibold text-lg mb-4"> Add a comment? </p>
        <textarea value={newComment} onChange={(e)=> setNewComment(e.target.value)} className="bg-whitetext w-full h-[100px] rounded-lg" name="" id="" ></textarea>
        <div onClick={handleAddComment} className="flex justify-end">  <button className="bg-purple text-white font-semibold px-3 py-1 rounded-2xl my-4"> Submit Comment </button>  </div>
      </div>
    </div>
  );
};

export default ProductDetails;