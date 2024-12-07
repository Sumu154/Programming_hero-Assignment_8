import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const fetchProducts = async () => {
      const res = await fetch('Json/productsData.json');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [])


  return (
    <div className="pt-14">
      <h2 className="text-blacktext text-3xl font-bold mb-6">  Explore Cutting-Edge Gadgets </h2>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(it => {
          return <Product key={it.id} product={it}></Product>
        })}
      </div>
    </div>
  );
};

export default Products;