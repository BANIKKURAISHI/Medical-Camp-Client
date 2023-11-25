import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import myCreateRoute from './A1(Main)/Route'
import {RouterProvider,} from "react-router-dom";
import AuthProvider from './A3(Authentication)/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <RouterProvider router={myCreateRoute} />
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
    
    </React.StrictMode>,
)
