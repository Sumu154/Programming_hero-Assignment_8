import React from 'react';
import HomeBanner from '../Headers/HomeBanner';
import Products from '../Others/Products';
import Categories from '../Others/Categories';


const HomePage = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto">
        <div className="w-full md:w-1/3 lg:w-1/5">
          <Categories></Categories>
        </div>
        {/* products er jonne */}
        <div className="w-full md:w-2/3 lg:w-4/5">
          <Products></Products>
        </div>
      </div>
    </div>
  );
};

export default HomePage;