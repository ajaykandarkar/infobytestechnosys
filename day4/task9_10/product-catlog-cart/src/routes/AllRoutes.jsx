import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../pages/Home'
import { DisplayCart } from '../components/DisplayCart'
export const AllRoutes = () => {
  return (
  <>
 <Routes>
 <Route
  path= "/"
 element={<Home/>}
/>
<Route
  path= "/cart"
 element={<DisplayCart/>}
/>
 </Routes>
  
  </>
  )
}
