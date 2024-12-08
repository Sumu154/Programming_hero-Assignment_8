import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { element } from 'prop-types';


import Home from './Components/Pages/HomePage.jsx';
import ProductDetails from './Components/Others/ProductDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async () => {
          const response = await fetch('/Json/productsData.json');
          const data = await response.json();
          return data;
        },

      },
    //   {
    //     path: "dashboard",
    //     element: <Dashborad> </Dashborad>
    //   },
    //   {
    //     path: 'statistic',
    //     element: <Statistic></Statistic>
    //   }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
