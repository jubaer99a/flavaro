import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeCart } from '../redux/slices/CartSlice';
import { increment, decrement } from '../redux/slices/CartSlice';

function CartItem({id, img, nam, pr, qty}) {
    const dispatch = useDispatch()
  return (
    <div className='flex items-end justify-between bg-white p-3 rounded-lg shadow-md relative'>
        <MdDelete onClick={() => dispatch(removeCart({id}))} className='absolute cursor-pointer top-2 right-2 text-[20px]' />
      <div className='flex items-center gap-2'>
        <img className='w-[70px] h-[70px]' src={img} alt="" />
        <div>
            <h3 className='font-semibold'>{nam}</h3>
            <p className='text-green-400 font-semibold'>{pr}₹</p>
        </div>
      </div>
      <div className='flex items-center gap-1'>
        <button onClick={() => dispatch(decrement({id}))} className='text-[22px] font-medium bg-green-400 leading-[14px] text-white p-[4px] rounded-md'>-</button>
        <p className='text-[16px] font-medium'>{qty}</p>
        <button onClick={() => dispatch(increment({id}))} className='text-[22px] font-medium bg-green-400 leading-[14px] text-white p-[4px] rounded-md'>+</button>
      </div>
    </div>
  )
}

export default CartItem
