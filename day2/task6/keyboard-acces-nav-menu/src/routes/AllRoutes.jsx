import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import { Home } from '../components/Home'
import { Feature } from '../components/Feature'
import { Service } from '../components/Service'
import { Pricing } from '../components/Pricing'

export const AllRoutes = () => {
  return (
    <>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/feature' element={<Feature/>}/>
  <Route path='/service'  element={<Service/>}/>
  <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
    
    </>
  )
}
