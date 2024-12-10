import { createContext, useState } from "react";

export const WishlistContext = createContext();


const WishlistProvider = ( {children} ) => {
  const [wishlist, setWishlist] = useState([]);
  
  return (
    <div>
      <WishlistContext.Provider value={ {wishlist, setWishlist} }>
        {children}
      </WishlistContext.Provider>
    </div>

  );
};

export default WishlistProvider;