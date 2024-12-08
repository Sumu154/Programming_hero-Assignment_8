import React from 'react';
import DashboardBanner from '../Headers/DashboardBanner.jsx'
import CartDashboard from '../Others/CartDashboard.jsx';

const DashboardPage = () => {
  return (
    <div>
      <DashboardBanner></DashboardBanner>
      <CartDashboard></CartDashboard>
    </div>
  );
};

export default DashboardPage;