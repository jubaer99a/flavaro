import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'

function Success() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000);
  }, [])



  return (
    <div className='w-full h-screen flex items-center justify-center'>

      {load ? <InfinitySpin
        visible={true}
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      /> : <div>

        <h1 className='text-[4.2vh] font-medium text-center'>Order Successful!</h1>
        <h1 className='text-[4.2vh] font-medium text-center'>Your order has been successfully placed</h1>
      </div>}
    </div>
  )
}

export default Success