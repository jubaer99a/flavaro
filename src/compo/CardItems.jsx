import React from 'react';
import FoodData from '../data/FoodData';
import Card from './Card';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const handleMess = (nam) => {
  toast(`${nam} added`, {
    icon: '👏',
  });
}

function CardItems() {
  const fooddata = FoodData;
  const hh = useSelector((fck) => fck.filter.name)
  const sr = useSelector((hh) => hh.search.srch)
  console.log(hh)


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
        />
      <div className='w-[270px] mx-auto mt-6 grid grid-cols-1 gap-4 lg:mt-14 lg:items-center  lg:w-full lg:grid-cols-5 lg:gap-4'>
      {
        fooddata.filter(food => {
          if(hh === 'All'){
            return food.name.toLowerCase().includes(sr.toLowerCase())
          }
          else{
            return hh === food.category && food.name.toLowerCase().includes(sr.toLowerCase())
            
          }
        }).map(val => {
          return <Card key={val.id} img={val.img}
          name={val.name}
          pr={val.price}
          des={val.desc}
          rat={val.rating}
          id={val.id}
          handle={handleMess} />
        })
      }
    </div>
    </>
  )
}

export default CardItems
