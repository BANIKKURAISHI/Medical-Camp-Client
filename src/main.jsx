import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import myCreateRoute from './A1(Main)/Route'
import {RouterProvider,} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={myCreateRoute} />
    </HelmetProvider>
    </React.StrictMode>,
)
