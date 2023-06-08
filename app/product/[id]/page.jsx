"use client"

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {IoMdHeartEmpty} from "react-icons/io";
import {BsStarFill, BsInfoCircle} from "react-icons/Bs" ;
import ship1 from "../../../public/ship/ship1.png";
import ship2 from "../../../public/ship/ship2.png";
import ship3 from "../../../public/ship/ship3.png";

const page = ({searchParams}) => {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);
 // const searchparams = useSearchParams();

  useEffect(() => {
    setisLoading(true);
    //setProduct(searchparams);
    setisLoading(false);
  
  })

  return (
    <div className='w-full bg-white'> 
       <div className='h-full max-w-[90%] mx-auto flex items-center py-4'>
          <div className='w-2/3  flex items-center justify-center overflow-hidden relative '>
             <Image src={searchParams.image} alt='image'
             width={50} height={50}
             className=' w-60 transform-origin-top-left cursor-move duration-500'/> 
          </div>

          <div className='w-1/3 h-full flex flex-col gap-1'>
             <p className='p-2 text-blue-700 text-sm font-semibold border-2 border-gray-400'>
              500+ sold since yesterday
             </p>

             <div className='px-2 py-4 border border-gray-400 rounded-lg flex flex-col gap-6'>
                 <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>

                      <button className='px-2 py-[1px] text-blue-600 text-sm border-[1px] border-blue-700 rounded-md'> Best seller </button>
                      <button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-700 rounded-md'> Rollback </button>
          
                    </div>                               
                 
                     <IoMdHeartEmpty className="text-gray-400 text-2xxl"/>
                  </div>
                  <div>
                      <p className='text-sm text-zinc-700'>
                         {searchParams.category}
                      </p>
                      <p className='text-xl font-semibold text-black'>
                          {searchParams.title}
                      </p>
                      <p className='text-zinc-500 text-base'> 
                          {searchParams.description}
                      </p>
        
                      <div className=' flex gap-2 items-center mt-2'>
                             <div className='flex text-sm gap-1'>
                                 <BsStarFill />
                                 <BsStarFill />
                                 <BsStarFill />
                                 <BsStarFill />
                                 <BsStarFill />
                             </div>
                             <p>25</p>
                      </div>
                      <div className='flex  gap-2 items-center'>
                        <p className='font-semibold text-2xl text-green-600'>
                          Now ${searchParams.price}
                        </p>
                        <p className='items-center gap-1 flex'>
                           <span>
                             <BsInfoCircle className='cursor-pointer '/>
                           </span>
                        </p>
                      </div>
                  </div> 
                  
                  <div>
                      <p>

                        <span className='font-semibold'>$18/month</span>
                        <span className='underline underline-offset-2 cursor-pointer'> Learn how </span>

                      </p>
                      <p className='text-xs text-zinc-500 flex items-center gap-1'>
                        price when purchased online
                        <span>
                          <BsInfoCircle className='cursor-pointer'/>
                        </span>
                      </p>
                  </div>

                  <div className='border-b-[1px] border-b-zinc-300 pb-4'>
                     <button className='w-32 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-700 duration-300'>
                       Add to cart
                     </button>
                  </div> 

                  <div>
                  
                  </div>  

                  <div className='p-2 space-y-2'>
                     <p className='text-xs font-semibold'>
                        How do you want your item?
                     </p>
                     <div className='w-full grid grid-cols-3 gap-4 text-xs'>
                        <div className='w-full border-2 border-zinc-400 rounded-lg flex flex-col items-center justify-center p-2'>
                          <Image src={ship1} alt='Image'/>
                          <p>Shipping</p>
                          <p>Tommorow</p>
                          <p>Free</p>
                        </div>

                        <div className='w-full border-2 border-zinc-400 rounded-lg flex flex-col items-center justify-center p-2'>
                          <Image src={ship2} alt='Image'/>
                          <p>Shipping</p>
                          <p>Tommorow</p>
                          <p>Free</p>
                        </div>

                        <div className='w-full border-2 border-zinc-400 rounded-lg flex flex-col items-center justify-center p-2'>
                          <Image src={ship3} alt='Image'/>
                          <p>Shipping</p>
                          <p>Tommorow</p>
                          <p>Free</p>
                        </div>
                     </div>
                     <p className='font-bold text-xs'>
                         Mumbai
                         <span className='font-normal underline underline-offset-2 ml-1'> Change</span>
                     </p>
                  </div>

              </div>
           </div>
        </div>   
    </div>
  )
}

export default page
