import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaStar } from "react-icons/fa6";
import { showIncre, showDecre, addtoVo } from '../redux/slices/CartSlice';
import { useParams } from 'react-router-dom';
import FoodData from '../data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import Card from './Card';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const handleMess = (nam) => {
  toast(`${nam} added`, {
    icon: '👏',
  });
}


function Show() {
  const navi = useNavigate()
  const {id} = useParams()
  const obj = useSelector((val) => val.carts.show)
  const dispatch = useDispatch()
  let bal = FoodData.filter(it => it.name === id);
  let allfck = [...FoodData];
  let sorted;
  sorted = useMemo(() => {
    return allfck.sort(() => 0.5 - Math.random()).slice(0, 5)
  }, [sorted])
  console.log(sorted)


  function shuna(){
    dispatch(addtoVo())
    toast(`${bal[0].name} added`, {
      icon: '👏',
    });
  } 
 
  return (
    <div className='w-full relative px-[10%] py-12'>
      <div onClick={() => navi('/')} className='w-[60px] h-[60px] fixed top-8 left-8 rounded-full cursor-pointer shadow-md  flex items-center justify-center bg-green-500'>
        <IoMdArrowRoundBack className='text-white text-[26px]'/>
      </div>
       <Toaster
        position="top-center"
        reverseOrder={true}
        />
        <div className='w-full flex items-center justify-between px-[8%]'>
        <div className="lside w-[30%]">
        <img className='w-full' src={bal[0].img} alt="" />
      </div>
      <div className='w-[60%]'>
        <h1 className='text-[6vh] font-bold'>{bal[0].name}</h1>
        <p className='text-[26px] font-bold text-green-500'>{bal[0].price} ₹</p>
        <p className='text-[16px] leading-relaxed mt-4'>{bal[0].desc}</p>
       <div className='flex items-center gap-8 mt-8'>
       <div className='flex items-center gap-2'>
          <FaStar className='text-[18px] text-yellow-400' />
          <p className='text-[16px] font-bold'>{bal[0].rating}</p>
        </div>
        <div className='flex items-center gap-2'>
        <button onClick={() => dispatch(showDecre())}  className='text-[22px] font-medium bg-green-500 leading-[14px] text-white p-[4px] rounded-md'>-</button>
        <p className='text-[16px] font-medium'>{obj.qty}</p>
        <button onClick={() => dispatch(showIncre())}  className='text-[22px] font-medium bg-green-500 leading-[14px] text-white p-[4px] rounded-md'>+</button>
      </div>
       </div>
       <button  onClick={() => shuna()} className='text-[16px] font-medium mt-4 bg-green-500 leading-[14px] text-white p-[10px_18px] rounded-md'>Add to cart</button>
      </div>
        </div>


        <div className='w-[270px] mx-auto mt-6 grid grid-cols-1 gap-4 lg:mt-14 lg:items-center  lg:w-full lg:grid-cols-5 lg:gap-4'>
          {sorted.map(val => {
            return <Card key={val.id} img={val.img}
            name={val.name}
            pr={val.price}
            des={val.desc}
            rat={val.rating}
            id={val.id}
            handle={handleMess}
             />
          })}
        </div>
    </div>
  )
}

export default Show
