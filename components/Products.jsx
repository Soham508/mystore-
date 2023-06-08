"use client"

import Image from 'next/image';
import {GoPlus} from "react-icons/go";
import Link from 'next/link';
import {BsStarFill} from "react-icons/Bs";
import { useState } from 'react';



async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}
 
 


const Products = async() => {
  const Data = await getData();
    
    //console.log(productData)
  
   
 return (
    <>

    <div className='py-6 px-4 grid grid-cols-4 gap-4'>

       {
          Data.map((item) => (
            <div key={item.id} className='border-[1px] border-gray-200 mb-6 group rounded-lg bg-orange-50'>
                
              <div className='w-full h-[350px] overflow-hidden p-1s'>

                <Image src={item.image} className='w-full h-full object-contain scale-100 group-hover:scale-105'
                 width={300} height={250} alt='Product image'/>

              </div>

              <div className='px-2 py-4 flex flex-col justify-center'>

                 <div className='flex justify-between items-center my-2'>
                     <button    className='w-20 h-9 bg-orange-500 text-white rounded-full flex gap-1 items-center justify-center hover:bg-orange-800 duration-300' >
                        <span>
                          <GoPlus/>
                         </span> 
                          Add 
                     </button>

                     <Link href= {{
                            pathname: 'product/${item.id}',
                            query: {
                              id: item.id,
                              title: item.title,
                              description: item.description,
                              price: item.price,
                              brand: item.brand,
                              category: item.category,
                              image: item.image,

                              rating: item.rating},
                              } 
                          } 
                            >
                          <button className='w-24 h-9 bg-white border-[1px] border-gray-700 text-black rounded-full flex items-center justify-center gap-1 hover:bg-black hover:text-white duration-300'>
                            <span>
                             <GoPlus/>
                            </span>
                            Details
                          </button>
                        
                     </Link>
                 </div>

                 <div>
                     <p className='font-titlefont text-lg text-green-700 font-semibold '>
                        Now ${item.price}
                     </p>
                     { //<p className='text-gray-500 line-through decoration-[1px]'>
                       // ${item.oldPrice}
                      //</p> 
                      }
                 </div>

                 
                 <p className='text-lg font-semibold py-2 text-zinc-800'>
                     {item.title.substring(0,25)}
                 </p>
                 
                 <p className='text-zinc-600 text-base'>
                    {item.description.substring(0,80)}
                 </p>

                 <div className=' flex gap-2 items-center mt-2'>
                     <div className='flex text-sm gap-1'>
                         <BsStarFill />
                         <BsStarFill />
                         <BsStarFill />
                         <BsStarFill />
                         <BsStarFill />
                     </div>
                     <p>{item.rating.rate}</p>
                     <p>{item.rating.count}+</p>
                 </div>

              </div>

             </div>

          ))
       }
    </div>

    </>
  )
}


export default Products