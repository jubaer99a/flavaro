import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/slices/CartSlice';
import { gotoShow } from '../redux/slices/CartSlice';
import {useNavigate} from 'react-router-dom'




function Card({img, id, name, pr, des, rat, handle}) {
    const dispatch = useDispatch()
    const navi = useNavigate()

    function added(){
        dispatch(addtoCart({img, name, pr, id, des, rat, qty: 1}))
        // toast('Good Job!', {
        //     icon: '👏',
        //   });
        handle(name)
    }

    function showAdd(){
        dispatch(gotoShow({id, img, name, pr, des, rat, qty: 1}))
        navi(`/${name}`)
    }
    
  return (
    <div>
        
        <div className='group w-full p-5 bg-white border border-green-400 rounded-xl'>
        <div onClick={() => showAdd()} className='w-[90%] cursor-pointer lg:w-full h-[130px] mx-auto  overflow-hidden rounded-lg'>
            <img className='w-full h-full object-cover transition group-hover:scale-125' src={img} alt="" />
        </div>
        <div onClick={() => showAdd()} className='w-full cursor-pointer flex items-center justify-between mt-3 gap-5'>
            <h3 className='text-[14px] font-bold'>{name}</h3>
            <h3 className='text-[14px] font-bold text-green-400'>{pr}₹</h3>
        </div>
        <p className='text-[14px] opacity-80 font-regular mt-2'>{des.length > 30 ? des.slice(0, 30) : des}...</p>
        <div className='w-full flex items-center justify-between  mt-4'>
            <div className='flex items-center gap-2'>
                <FaStar className='text-[14px] font-bold text-yellow-400'/>
                <p className='text-[14px] font-bold'>{rat}</p>
            </div>
            <button onClick={() => added()} className='text-[14px] p-[3px_6px] text-white border border-green-400 rounded-lg ease-in-out transition  bg-green-400'>Add to cart</button>
        </div>
    </div>
    </div>
  )
}{}

export default Card
