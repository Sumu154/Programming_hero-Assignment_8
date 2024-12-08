import React from 'react';
import { PiSortDescendingDuotone } from "react-icons/pi";


const CartDashboard = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold"> Cart </h5>
        <div className="flex gap-3 items-center">
          <h5 className="text-lg font-bold"> Total cost: {} </h5>
          <button className="flex gap-1 items-center">Sort by Price <PiSortDescendingDuotone /> </button>
          <button> Purchase </button>
        </div>
      </div>
    </div>
  );
};

export default CartDashboard;