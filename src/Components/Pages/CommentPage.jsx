import React from 'react';
import { Helmet } from 'react-helmet';

import CommentBanner from '../Headers/CommentBanner';
import Comments from '../Others/Comments';



const CommentPage = () => {
  return (
    <div>
      <Helmet>
        <title> Comment </title>
      </Helmet>

      <CommentBanner></CommentBanner>
      <Comments></Comments>
    </div>
  );
};

export default CommentPage;