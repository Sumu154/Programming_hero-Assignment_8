import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  const {id, title, image, price} = product;

  return (
    <div className="text-blacktext bg-white p-6 rounded-lg">
      <img className="h-[100px] mx-auto mb-3" src={image} alt="" />
      <h3 className="font-semibold text-xl mb-1"> {title} </h3>
      <p className="opacity-60 mb-2"> Price: {price}$ </p>
      <Link to={`/products/${id}`}>  <button className="px-5 py-2 text-purple font-semibold border-[1px] border-purple rounded-3xl"> View Details </button>  </Link>
    </div>
  );
};

export default Product;