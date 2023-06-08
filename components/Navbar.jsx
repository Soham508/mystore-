"use client"

import React from 'react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/Ai";
import {BsCart2} from "react-icons/Bs";
import Navbarbottom from './Navbarbottom';
import Link from 'next/link';



const Navbar = () => {
 
  return (
      
       <div className='w-full h-[20] bg-orange-400 text-white '>
         <div className='border-b-[1px] border-b-slate-50 w-full p-2'>
          <div className='mx-5 space-x-2 w-[95%] justify-betweens flex items-center '>
             <Link href={"/"}>
                <div className='h-12 px-5 rounded-full bg-transparent flex items-center gap-2 hover:bg-orange-700 duration-300 cursor-pointer'>
                  <Image 
                  src={"/../public/logo.png"}
                  alt='Logo'
                  height={30}
                  width={90}
                   className='' />
                </div>
              </Link>
              <div className='navBarhover' >
                 <p className='font-bold'>Department</p>
              </div>
   
              <div className='navBarhover' >
                 <p className='font-bold'>Services</p>
              </div>
   
              <div className='h-10 items-center flex flex-1 relative'>
                 <input placeholder='search...'
                 className='h-full w-full rounded-full px-4 text-gray-600 outline-none text-bold border-[1px] border-transparent focus-visible:border-black duration-200 ' type='text'/>
   
                  <span className='absolute w-8 h-8 items-center rounded-full flex justify-center top-1 right-1 bg-yellow-400 text-black text-x1'>
                   <FaSearch />
                  </span>
              </div>
   
   
             <div className='navBarhover '>
                <AiOutlineHeart />
                <div>
                 <p className='text-base font-semibold'>My items</p>
                </div>
             </div>  
   
             <div className='navBarhover '>
                <AiOutlineUser className='text-lg'/>
                <div>
                 <p className='text-base font-semibold'>Sign in</p>
                 <h2 className='text-base font-semibold -mt-1'>Acoount</h2>
                </div>
             </div>          
             
             <div className='flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-orange-700 duration-300 relative'>
                 <BsCart2 className='text-2xl'/>
                 <p className='text-[10px]'>$0.00</p>
                 <span className='absolute w-4 h-4 bg-yellow-300 text-black top-0 right-4 rounded-full flex items-center p-2 justify-center text-xs'>0</span>
             </div>
   
         </div>
       </div>
         
      <Navbarbottom />
    </div>
   
  )
}

export default Navbar
