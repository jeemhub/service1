import React from 'react'
import { BsList } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import { BiCart } from "react-icons/bi";
import { useState } from 'react';
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { BsTranslate } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from "framer-motion"
function Nav() {
    const [togol, settogol] = useState(true);
    const [togol2, settogol2] = useState(false);
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [togol2])
    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement({
            pageLanguage: 'ar',
            includedLanguages : "en,ar", 
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element');
    }
    return (
        <>
        <div className='flex md:flex-row flex-col top-0 p-6 font-bold text-black bg-white md:justify-between  fixed z-50 w-full '>
            <div className='flex flex-row justify-between w-full '>
                <div className='flex flex-row'>
                    <div className='flex flex-row items-center'>
                        <button onClick={()=>{settogol2(!togol2);console.log(togol2);}} className="text-3xl mr-4"><BsTranslate/></button>
                        <Link href="/" >
                           <h1 className='text-lg text-black font-bold border-solid border-2 border-white rounded-lg p-2 hover:bg-blue-600 duration-500 rounded-md p-2 text-center hover:text-white'>مكتب أم خليفة</h1>
                        </Link>
                        {togol2?<span className='absolute left-1/2' id="google_translate_element"></span>:<br></br>}
                    <span className='absolute left-1/2 hidden' id="google_translate_element"></span>
                    </div>
                </div>
                <button className='md:hidden text-4xl' onClick={() => settogol(!togol)}>
                    {togol ? <BsList /> : <BsXLg />}
                </button>
            </div>
            <motion.ul initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }} className={`flex pt-2 md:flex-row flex-col md:ml-6 md:hidden text-md font-mono ${togol ? 'hidden' : ''}`}>
            <li onClick={()=>settogol(!togol)} className='md:mx-4 '><Link href="/about" >
                    عن المكتب 
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/price" >
                     أسعارنا
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/ourpost" >
                    أخبارنا
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/offer" >
                    عروضنا
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/info" >
                        معلومات تهمك
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/communication" >
                    تواصل معنا
                </Link></li>
                
              
              
               
            </motion.ul>
            <ul className={`md:flex pt-2 md:flex-row hidden  flex-col md:ml-6  text-md font-mono`}>
        
                <li className='md:mx-4 hover:bg-blue-600 duration-500 rounded p-2 text-center hover:text-white'><Link href="/communication" >
                    تواصل معنا
                </Link></li>
                <li className='md:mx-4 hover:bg-blue-600 duration-500 rounded p-2 text-center hover:text-white'><Link href="/info" >
                    معلومات تهمك
                </Link></li>
                <li className='md:mx-4 hover:bg-blue-600 duration-500 rounded p-2 text-center hover:text-white'><Link href="/ourpost" >
                    اخبارنا
                </Link></li>
                <li className='md:mx-4 hover:bg-blue-600 duration-500 rounded p-2 text-center hover:text-white'><Link href="/offer" >
                    عروضنا
                </Link></li>
                <li className='md:mx-4 hover:bg-blue-600 duration-500 rounded p-2 text-center hover:text-white'><Link href="/about" >
                    عن المكتب
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4 hover:bg-blue-600 duration-500 rounded p-2 text-center hover:text-white'><Link href="/price" >
                     اسعارنا
                </Link></li>
            </ul>
            
        </div>
        <br></br>
        </>
    )
}

export default Nav