import React from 'react';

const DashboardBanner = () => {
  return (
    <div className="py-8 bg-purple text-center text-white">
      <h3 className="text-3xl font-bold mb-2"> Dashboard </h3>
      <p className="max-w-[700px] mx-auto"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>

      {/* buttons */}
      <div className="flex gap-4 justify-center mt-4">
        <button className="px-10 py-2 rounded-3xl"> Cart </button>
        <button className="px-10 py-2  rounded-3xl"> Wishlist </button>
      </div>
    </div>
  );
};

export default DashboardBanner;