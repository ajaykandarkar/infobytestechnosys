import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Details } from '../Details'
import { Product } from '../Product'

export const AllRoute = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Product />} />
    <Route path="/products/details/:id" element={<Details />} />
  </Routes>
  
  )
}
