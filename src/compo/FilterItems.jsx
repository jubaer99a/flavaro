import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FoodData from '../data/FoodData'
import { selected } from '../redux/slices/FilterSlice'
import { useDispatch } from 'react-redux'


function FilterItems() {
  const dispatch = useDispatch()
  // const allcart = useSelector((cart) => cart.carts.cart);
  const selectedItem = useSelector((bal) => bal.filter.name)
  const [cat, setCat] = useState(['All'])
  // let arr = ['fre','ferf'];

  function seting(){
    let shona = ['All']
    let gg = [...new Set(FoodData.map(val => val.category))];
    setCat(shona.concat(gg))
  }


  useEffect(() => {
    seting()
  }, [])



  return (
    <div className='mt-8'>
      <h2 className='text-[18px] font-medium'>Find the best food here</h2>
      <div className='flex gap-3 mt-4 overflow-x-auto'>
        {cat.map(caty => {
          return <button key={caty} onClick={() => dispatch(selected({voda: caty}))} className={` ${selectedItem === caty ? 'bg-green-400 text-white' : null} text-[16px] p-[4px_8px] border border-green-400 rounded-lg ease-in-out transition hover:text-white hover:bg-green-400`}>{caty}</button>
        })}
        
      </div>
    </div>
  )
}

export default FilterItems
