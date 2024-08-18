import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compo/Header'
import FilterItems from './compo/FilterItems'
import CardItems from './compo/CardItems'
import Cart from './compo/Cart'
import Icon from './compo/Icon'

function App() {
  
  return (
    <div className='w-full px-[8%] overflow-x-auto relative'>
      <Header />
      <FilterItems />
      <CardItems />
      {/* <Cart /> */}
     
    </div>
  )
}

export default App
