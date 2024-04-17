import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home/Home"
import CountryCardDetail from './components/CountryCardDetail/CountryCardDetail'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "country/:countryName",
    element: <CountryCardDetail />
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
