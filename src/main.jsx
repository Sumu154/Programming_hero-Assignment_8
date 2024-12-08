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


import HomePage from './Components/Pages/HomePage.jsx';
import DetailsPage from './Components/Pages/DetailsPage.jsx';
import DashboardPage from './Components/Pages/DashboardPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "products/:id",
        element: <DetailsPage></DetailsPage>,
        loader: async ({ params }) => {
          const res = await fetch('/Json/productsData.json');
          const data = await res.json();
          const product = data.find(it => parseInt(it.id) === parseInt(params.id));
          return product;
        },

      },
      {
        path: "dashboard",
        element: <DashboardPage> </DashboardPage>
      },
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
