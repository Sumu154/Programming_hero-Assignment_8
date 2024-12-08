import React from 'react';
import DetailsBanner from '../Headers/DetailsBanner';
import ProductDetails from '../Others/ProductDetails';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
  const product = useLoaderData();  // current product ta peye geci

  return (
    <div>
      <DetailsBanner></DetailsBanner>
      <ProductDetails product={product}></ProductDetails>
    </div>
  );
};

export default DetailsPage;