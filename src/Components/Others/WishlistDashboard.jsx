import React, { useContext } from 'react';
import { WishlistContext } from '../../Contexts/WishlistContext';
import { CiCircleRemove } from "react-icons/ci";
import { CartContext } from '../../Contexts/CartContext';
import { TotalcostContext } from '../../Contexts/TotalcostContext';

const WishlistDashboard = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext); 
  const { totalcost, setTotalcost } = useContext(TotalcostContext);

  const handleAddToCart = () => {
    setTotalcost(totalcost+price);
    setCart([...cart, product]);
  }

  const handleRemoveWishlist = (id) => {
    setWishlist(wishlist.filter((it) => {
      return it.id !== id;
    }))
  }

  return (
    <div className="w-[90%] mx-auto">
      <h5 className="text-blacktext text-2xl font-bold mb-10"> Wishlist </h5>

      {/* show the wishlist */}
      {wishlist.map(it => {
        const {id, image, price, title, description} = it;

        return (
          <div className="bg-white p-3 flex flex-col sm:flex-row gap-5 items-center max-w-[980px] mx-auto rounded-lg mt-4">
            <img className="w-[150px]" src={image} alt="" />
            <div>
              <h5 className="text-xl font-bold mb-1"> {title} </h5>
              <p className="opacity-60 mb-1"> {description} </p>
              <p className="opacity-80 font-bold"> Price: ${price} </p>
              <button onClick={handleAddToCart} className="bg-purple text-white font-bold px-3 py-1 rounded-2xl mt-3"> Add to Card  </button>

            </div>
            <div onClick={()=>handleRemoveWishlist(id)} className="text-red-600 text-3xl px-6 ml-auto"> <CiCircleRemove /> </div>
          </div>
        )
      })}

    </div>
  );
};

export default WishlistDashboard;