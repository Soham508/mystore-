import React from 'react';
import {FiChevronDown} from "react-icons/Fi";
import {FaPlaceOfWorship} from "react-icons/fa";
import {MdOutlineLocationOn} from "react-icons/md";
import Image from 'next/image';

const Navbarbottom = () => {
    return (
        <div className='w-full mx-auto py-2 px-6 flex items-center justify-between'>

            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-2 '>
                    <Image 
                     alt='Image'
                     height={30}
                     width={30}
                     src={"/../public/phoneImg.webp"}/>

                     <p className='text-sm font-semibold'>
                        How do you want to buy?
                     </p>

                     <FiChevronDown/>
                       
                     <span className='w-[1px] h-4 bg-white inline-flex ml-2'>
                        
                     </span>  
                </div>
                   
                <div className='flex items-center gap-2'>
                    <MdOutlineLocationOn/>
                    <p className='text-sm text-white'> Sacramento</p>
                     
                     <FaPlaceOfWorship/>
                     <p className='teext-sm text-white'> Sacramento</p>

                </div>
            </div>
            
            <ul className='flex gap-6 text-sm font-semibold'>
                <li className='hover:underline-offset-2 cursor-pointer decoration-[1px] duration-200'> Deals</li>
                <li className='navBottom'> Deals</li>
                <li className='navBottom'> Grocery</li>
                <li className='navBottom'> Easter</li>
                <li className='navBottom'> Home</li>
                <li className='navBottom'> Fashion</li>
                <li className='navBottom'> Tech</li>
                <li className='navBottom'> Auto</li>
            </ul>

        </div>
    )
}

export default Navbarbottom
