import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

function Cart() {
  const navi = useNavigate(null)
    const [carts, setCarts] = useState(false)
    const Allcarts = useSelector((val) => val.carts.cart)

    const allnum = Allcarts.length === 0 ? 0 : Allcarts.reduce((acc, sum) => acc + sum.qty, 0);
    const motprice = Allcarts.length === 0 ? 0 : Allcarts.reduce((acc, sum) => acc + sum.pr * sum.qty, 0);
    
  return (
    <div className='z-[1000]'>
        <div className={`fixed top-0 right-0 w-full lg:w-[22vw] h-screen bg-white px-3 py-3 flex flex-col justify-between z-50 transition ${carts ? 'translate-x-0' : 'translate-x-[100%]'}`}>
     <div>
     <div className='flex items-center justify-between'>
        <h3 className='text-[24px] font-medium'>My order</h3>
        <IoClose onClick={() => setCarts(p => !p)} className='text-[26px] rounded-md cursor-pointer  p-[4px] border border-black'/>
      </div>

      <div className='roller mt-4 flex flex-col gap-3 h-[450px] overflow-y-scroll py-4'>
        {Allcarts.length > 0 ? Allcarts.map(val => {
            return <CartItem key={val.id} id={val.id} img={val.img} nam={val.name} pr={val.pr} qty={val.qty}/>
        }) : 'No items found'}
      </div>
     </div>

     <div>
        <p className='text-[16px] font-semibold'>Items: <span className='text-green-400'>{allnum}</span></p>
        <p className='text-[16px] font-semibold pb-2 border-b border-black'>Total amount: <span className='text-green-400'>{motprice}₹</span></p>
        <button onClick={() => navi("/success")} className='w-full py-2 text-[16px] mt-3 font-semibold text-white rounded-lg bg-green-400'>Checkout</button>
     </div>
    </div>

        <div className={`${Allcarts.length === 0 ? '' : 'animate-bounce'} w-[60px] fixed right-5 bottom-5 cursor-pointer h-[60px] flex items-center shadow-md justify-center rounded-full bg-white`} onClick={() => setCarts(p => !p)}>
            <FaCartShopping className='text-[20px]' />
        </div>
    </div>
  )
}

export default Cart
