"use client"

import Image from 'next/image';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import "./globals.css";
import Main from '../components/Main';
import FooterTop from "../components/Footer";


export default function Home() {
 
  return (
    
       <div className='w-full bg-orange-50'>
      
        <main className='w-[84%] ml-[7%] mr-[7%] bg-white '>
          <Main />
          <Products />
          
        </main>
        
     </div>
  
  )
}
