import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home/Home"
import CountryCardDetail from './pages/CountryCardDetail/CountryCardDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":countryName",
    element: <CountryCardDetail />
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
