import React from 'react';
import { Link } from 'react-router-dom';

import bannerImg from '../../assets/images/banner.jpg'

const HomeBanner = () => {
  return (
    <div>
      <div className="text-white text-center bg-purple w-[95%] mx-auto pb-8 md:pb-16 lg:pb-28">
        <h3 className="font-bold text-2xl md:text-3xl  lg:text-4xl max-w-[80%] mx-auto mb-3"> Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h3>
        <p className="max-w-[550px] mx-auto"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>
        <Link to="/dashboard"> <button className="text-purple bg-white px-6 py-2 my-5 rounded-3xl"> Shop Now </button> </Link>
      </div>

      {/* image */}
      <div className="w-[60%] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px] mx-auto p-2 bg-white bg-opacity-20 -mt-10 md:-mt-16 lg:-mt-28 borer-white border-[1px] rounded-xl">
        <img className="w-full h-full object-cover self-center rounded-xl" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;