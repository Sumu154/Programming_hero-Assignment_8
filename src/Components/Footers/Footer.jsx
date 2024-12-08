import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="text-blacktext py-16 mt-8 max-w-[680px] mx-auto">
        <h2 className="text-3xl font-bold text-center"> Gadget Heaven </h2>
        <p className="opacity-70 text-center"> Leading the way in cutting-edge technology and innovation. </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between pt-10">
          <div className="text-center">
            <h5 className="text-lg font-bold"> Services </h5>
            <ul className="opacity-60">
              <li> <a href=""> Product Support </a> </li>
              <li> <a href=""> Order Tracking </a> </li>
              <li><a href=""></a> Shipping & Delivery </li>
              <li><a href=""></a> Returns </li>
            </ul>
          </div>
          <div className="text-center">
            <h5 className="text-lg  font-bold"> Company </h5>
            <ul className="opacity-60">
              <li><a href=""> About Us </a></li>
              <li><a href=""> Careers </a></li>
              <li><a href=""> Contact </a></li>
            </ul>
          </div>
          <div className="text-center">
            <h5 className="text-lg font-bold"> Legal </h5>
            <ul className=" opacity-60">
              <li><a href=""> Terms of Service </a></li>
              <li><a href=""> Privacy Policy </a></li>
              <li><a href=""> Cookie Policy </a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;