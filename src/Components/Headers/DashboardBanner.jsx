import React from 'react';

const DashboardBanner = ( {active, setActive} ) => {
  return (
    <div className="py-8 bg-purple text-center text-white mb-8">
      <h3 className="text-3xl font-bold mb-2"> Dashboard </h3>
      <p className="max-w-[700px] mx-auto"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>

      {/* buttons */}
      <div className="flex gap-4 justify-center mt-4">
        <button onClick={()=> setActive('cart')} className={`px-10 py-2 rounded-3xl font-bold   ${active==='cart'?"bg-white text-purple" : "bg-purple text-white border-[1px] border-white"}`}> Cart </button>
        <button onClick={()=> setActive('wishlist')} className={`px-10 py-2 rounded-3xl font-bold  ${active==='wishlist'?"bg-white text-purple" : "bg-purple text-white border-[1px] border-white"} `}> Wishlist </button>
      </div>
    </div>
  );
};

export default DashboardBanner;