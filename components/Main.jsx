import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className='w-full bg-white px-4 py-6 flex gap-4 border-b-[1px]'>
      <div className='w-2/3 rounded-xl h-[410px] shadow-xl relative'>

      </div>

      <div className='w-1/3 border-[1px] border-gray-200 rounded-xl shadow-xl p-4
       flex flex-col space-y-2 '>
        <div className='flex items-center justify-between '>

          <h2> Flash picks of the day</h2>
          <p> View all</p>
        </div>

        <div className='flex justify-center w-full px-auto'>
          <Image src={"/../public/slider/bannerImg.webp"}
            className='w-[90%] h-60 object-cover'
            alt='Image' height={100} width={100} />
        </div>

        <button className='navBarhover bg-orange-400 h-10  text-white self-center'> options</button>
     
        <div>
          <p className='text-lg font-semibold text-black'>from $199.00</p>
          <p className=' text-zinc-500 text-sm'>Sofa set for living room</p>
        </div>

      </div>
    </div>
  )
}

export default Main
