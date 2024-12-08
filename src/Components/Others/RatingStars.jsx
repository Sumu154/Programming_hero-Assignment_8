import React from 'react';
import { IoStar, IoStarHalf, IoStarOutline  } from "react-icons/io5";


const RatingStars = ( {rating} ) => {
  const fullStars = Math.floor(rating);
  const halfStars = (rating%1 >= .4) ? 1 : 0;
  const emptyStars = 5-fullStars-halfStars;

  const stars = [];

  for(let i=0 ; i<fullStars ; i++){
    stars.push(<span> <IoStar />  </span>);
  }
  if(halfStars === 1){
    stars.push(<span> <IoStarHalf /> </span>);
  }
  for(let i=0 ; i<emptyStars ; i++){
    stars.push(<span> <IoStarOutline /> </span>);
  }

  console.log(stars);

  return (
    <div className="flex text-lg gap-[2px] text-rating">
      {stars}
    </div>
  );
};

export default RatingStars;