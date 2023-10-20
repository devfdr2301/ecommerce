import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import './App.css'
import Home from './Pages/Home/Home.jsx'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Products from './Pages/Products/Products'
import AutoLayout from './components/AutoLayout/AutoLayout.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AutoLayout />}
    >
     
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
       
 
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
