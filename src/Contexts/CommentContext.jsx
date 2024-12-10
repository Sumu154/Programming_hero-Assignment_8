import React, { createContext, useState } from 'react';

export const CommentContext = createContext();

const CommentProvider = ( {children} ) => {
  const [comments, setComments] = useState([]);

  
  return (
    <div>
      <CommentContext.Provider value={ {comments, setComments} }>
        {children}
      </CommentContext.Provider>
    </div>
  );
};

export default CommentProvider;