import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { gosearch } from '../redux/slices/SearchSlice';

function Header() {
  const sr = useSelector((val) => val.search.srch);
  const dispatch = useDispatch()
  return (
    <div className='w-full flex flex-col gap-5 py-6 lg:gap-0 lg:items-center lg:flex-row lg:justify-between'>
        <div>
            <h1 className='text-lg opacity-80'>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='font-bold text-3xl'>Flavaro Foods</h1>
        </div>
        <input className='text-[16px] w-[300px] border border-black bg-transparent p-3' type="text" value={sr} placeholder='Search here' onChange={(e) => dispatch(gosearch({vod: e.target.value}))} />
    </div>
  )
}

export default Header
