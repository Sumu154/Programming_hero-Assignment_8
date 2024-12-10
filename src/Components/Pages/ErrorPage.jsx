import React from 'react';
import { Helmet } from 'react-helmet';


const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title> Error </title>
      </Helmet>

      <h2 className="text-3xl">Page not found 😊 </h2>
      <p>Status: 404</p>
    </div>
  );
};

export default ErrorPage;