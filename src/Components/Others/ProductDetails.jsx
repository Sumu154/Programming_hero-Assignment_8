import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id: productId } = useParams();   //products/:id ei router theke id ta dibe -> current je route thakbe setar
  const data = useLoaderData();    // main e jeta load korcilam loader diye eta pabo
  console.log(productId, data);

  const product = data.find(it => {
    return parseInt(it.id) === parseInt(productId);          //router current product ta pailam
  })
  const {id, title, image, price, description, specification, availability, rating} = product;

  return (
    <div>
      <h2> Hi I am {} </h2>
    </div>
  );
};

export default ProductDetails;