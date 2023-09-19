import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';


import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/CONTACT/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Modal from './Components/Portfolio/Modal';
import Error from './Components/Error/Error';

const router =  createBrowserRouter([
  {path:'' , element:<App/> , children:[
    {index:true  , element : <Home/>  },
    {path:'startreact' , element : <Home/>  },
    {path:'portfolio'  , element : <Portfolio/> , children:[
      {path:'modal', element:<Modal />
    }
    ]  },
    {path:'about'  , element : <About/>  },
    {path:'contact'  , element : <Contact/>  },
    {path:'*'  , element : <Error/>  },
    
    
  ]}

])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

