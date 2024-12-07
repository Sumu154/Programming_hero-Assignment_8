import React from 'react';

const Categories = () => {
  const categories = ['All Products', 'Laptops', 'Phones', 'Accessories', 'Smart Watches', 'Earphones'];

  return (
    <div className="p-5 bg-white mx-5 mt-[118px] rounded-xl grid grid-cols-2 md:grid-cols-1 gap-x-3">
      {categories.map((it, index) => {
        return <button key={index} className="bg-whitetext px-3 py-2 w-full my-2 rounded-3xl opacity-60 font-medium"> {it} </button>
      })}
    </div>
  );
};

export default Categories;