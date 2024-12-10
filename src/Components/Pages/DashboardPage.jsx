import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import DashboardBanner from '../Headers/DashboardBanner.jsx'
import CartDashboard from '../Others/CartDashboard.jsx';
import WishlistDashboard from '../Others/WishlistDashboard.jsx';

const DashboardPage = () => {
  const [active, setActive] = useState('cart');


  return (
    <div>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <DashboardBanner active={active}  setActive={setActive}></DashboardBanner>
      {active==='cart' && <CartDashboard></CartDashboard>}
      {active==='wishlist' && <WishlistDashboard></WishlistDashboard>}
    </div>
  );
};

export default DashboardPage;