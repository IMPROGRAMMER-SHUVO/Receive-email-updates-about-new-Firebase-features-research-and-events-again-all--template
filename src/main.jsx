import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from '../Layout/Main';
import Authproviders from './components/Providers/Authproviders';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Login',
        element:<Login></Login>

      },
      {
        path: '/Register',
      element:<Register></Register>
      },
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authproviders>
 <RouterProvider router={router} />
 </Authproviders>
  </React.StrictMode>,
)
