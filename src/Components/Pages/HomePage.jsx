import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import HomeBanner from '../Headers/HomeBanner';
import Products from '../Others/Products';
import Categories from '../Others/Categories';


const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div>
      <Helmet>
        <title> Home </title>
      </Helmet>

      {/* components */}
      <HomeBanner></HomeBanner>
      <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto">
        <div className="w-full md:w-1/3 lg:w-1/5">
          <Categories  handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}></Categories>
        </div>
        {/* products er jonne */}
        <div className="w-full md:w-2/3 lg:w-4/5">
          <Products  selectedCategory={selectedCategory}></Products>
        </div>
      </div>
    </div>
  );
};

export default HomePage;