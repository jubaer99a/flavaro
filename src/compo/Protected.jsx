import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protected({element}) {
    const lnth = useSelector((val) => val.carts.cart)
  return lnth.length > 0 ? element : <Navigate to='/' />
}

export default Protected
