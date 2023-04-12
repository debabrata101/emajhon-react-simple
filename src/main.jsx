import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Layout/Home';
import Oders from './Component/Oders/Oders';
import Shop from './Component/Shop/Shop';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import CartsProductsLoader from './Cartsproductsloader/CartsProductsLoader';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children :[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/order',
        element:<Oders></Oders>,
        loader: CartsProductsLoader
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>

      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
