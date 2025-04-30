import React, { useState } from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid'

export const Header = () => {
    const [togglemenu, setToggleMenu]=useState(false);
  return (
    <div>
      <navbar className="flex justify-between px-5 py-8 bg-primary ">
      <a className='font-bold text-blue-600 text-4xl' href='#'>K Bhargav</a>
     
      {/* hidden meadium device  */}
      <nav className='hidden md:block'>
      <ul className='flex text-white navicon'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projuct</a></li>
        <li><a href='#resume'>Resume</a></li>
        <li><a href='#contact'>Contact</a></li>
       </ul>
      </nav>

     {togglemenu &&  <nav className='block md:hidden'>
      <ul onClick={()=>setToggleMenu(!togglemenu)}  className='flex flex-col mobile-nav text-white p-5'>
      <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projuct</a></li>
        <li><a href='#resume'>Resume</a></li>
        <li><a href='#contact'>Contact</a></li>
       </ul>
      </nav>}
      <button onClick={()=>setToggleMenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
      </navbar>

    </div>
  )
}

