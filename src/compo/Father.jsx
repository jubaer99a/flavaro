import React from 'react'
import Cart from './Cart'
import { Outlet } from 'react-router-dom'

function Father() {
  return <div className='w-full relative'>
    
    <Outlet />
    <Cart />
  </div>
}

export default Father
