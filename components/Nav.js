import React from 'react'
import { BsList } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import { BiCart } from "react-icons/bi";
import { useState } from 'react';
import { GiAmericanFootballHelmet } from "react-icons/gi";
import Logo from '../public/Logo.jpg'
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
function Nav() {
    const [togol, settogol] = useState(true);
    const count=useSelector((state)=>state.item.count);
   
    return (
        <>
        <div className='flex md:flex-row flex-col top-0 p-6 font-bold text-white bg-gray-900 md:justify-between  fixed z-50 w-screen'>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row'>
                    <div className='flex flex-row items-center'>
                        
                        <Link href="/" >
                           <h1 className='text-lg text-white font-bold border-solid border-2 border-white rounded-lg p-2'>مكتب ام خليفة</h1>
                        </Link>
                    </div>
                </div>
                <button className='md:hidden text-4xl' onClick={() => settogol(!togol)}>
                    {togol ? <BsList /> : <BsXLg />}
                </button>
            </div>
            <ul className={`flex pt-2 md:flex-row flex-col md:ml-6 md:hidden text-md font-mono ${togol ? 'hidden' : ''}`}>
         
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/" >
                    تواصل معنا
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/" >
                     الاسئلة المتكررة
                </Link></li>
                
               
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/offer" >
                    عروضنا
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/ourpost" >
                    اخبارنا
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/about" >
                    عن المكتب 
                </Link></li>
            </ul>
            <ul className={`md:flex pt-2 md:flex-row hidden  flex-col md:ml-6  text-md font-mono`}>
        
                <li className='md:mx-4'><Link href="/" >
                    تواصل معنا
                </Link></li>
                <li className='md:mx-4'><Link href="/" >
                     الاسئلة المتكررة
                </Link></li>
             
               
                <li className='md:mx-4'><Link href="/ourpost" >
                    اخبارنا
                </Link></li>
                <li className='md:mx-4'><Link href="/offer" >
                    عروضنا
                </Link></li>
                <li className='md:mx-4'><Link href="/About" >
                    عن المكتب
                </Link></li>
            </ul>
            
        </div>
        <br></br>
        </>
    )
}

export default Nav