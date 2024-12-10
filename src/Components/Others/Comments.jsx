import React, { useContext } from 'react';
import { CommentContext } from '../../Contexts/CommentContext';
import { Link } from 'react-router-dom';


const Comments = () => {
  const { comments } = useContext(CommentContext);
  

  return (
    <div className="w-[90%] mx-auto">
      <h5 className="text-2xl font-bold mb-5"> Comments here </h5>
      {comments.map((it) => {
        const {prodId, prodTitle, commentText} = it;

        return (
          <div className="bg-white p-4 rounded-lg max-w-[980px] mx-auto">
            <div className="flex justify-between items-center">
              <p> Comment for <span className="font-semibold"> "{prodTitle}" </span> </p>
              <Link to={`/products/${prodId}`}> <span className="text-purple underline"> See product details </span> </Link>
            </div>
            <p className="opacity-75"> { commentText } </p>
          </div>
        )
      })}
    </div>
  );
};

export default Comments;