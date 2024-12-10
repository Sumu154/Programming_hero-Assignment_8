import React from 'react';

const Categories = ( {handleCategoryChange, selectedCategory} ) => {
  const categories = ['All Products', 'Laptops', 'Phones', 'Accessories', 'Watches', 'Earphones'];

  return (
    <div className="p-5 bg-white mx-5 mt-[118px] rounded-xl grid grid-cols-2 md:grid-cols-1 gap-x-3">
      {categories.map((it, index) => {
        return <button onClick={()=>handleCategoryChange(it)}  key={index} className= {`px-3 py-2 w-full my-2 rounded-3xl font-medium  ${selectedCategory===it ? "bg-purple text-white " : "bg-whitetext opacity-60"} `}> {it} </button>
      })}
    </div>
  );
};

export default Categories;