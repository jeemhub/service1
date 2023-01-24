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
        <div className='flex md:flex-row flex-col top-0 p-6 font-bold text-white bg-gray-900 md:justify-between  fixed z-50 w-screen'>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row'>
                    <div className='flex flex-row items-center'>
                        <button onClick={()=>{settogol2(!togol2);console.log(togol2);}} className="text-3xl mr-4"><BsTranslate/></button>
                        <Link href="/" >
                           <h1 className='text-lg text-white font-bold border-solid border-2 border-white rounded-lg p-2'>مكتب أم خليفة</h1>
                        </Link>
                        {togol2?<span className='absolute left-1/2' id="google_translate_element"></span>:<br></br>}
                    <span className='absolute left-1/2 hidden' id="google_translate_element"></span>
                    </div>
                </div>
                <button className='md:hidden text-4xl' onClick={() => settogol(!togol)}>
                    {togol ? <BsList /> : <BsXLg />}
                </button>
            </div>
            <ul className={`flex pt-2 md:flex-row flex-col md:ml-6 md:hidden text-md font-mono ${togol ? 'hidden' : ''}`}>
            <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/about" >
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
                
              
              
               
            </ul>
            <ul className={`md:flex pt-2 md:flex-row hidden  flex-col md:ml-6  text-md font-mono`}>
        
                <li className='md:mx-4'><Link href="/communication" >
                    تواصل معنا
                </Link></li>
                <li className='md:mx-4'><Link href="/info" >
                    معلومات تهمك
                </Link></li>
                <li className='md:mx-4'><Link href="/ourpost" >
                    اخبارنا
                </Link></li>
                <li className='md:mx-4'><Link href="/offer" >
                    عروضنا
                </Link></li>
                <li className='md:mx-4'><Link href="/about" >
                    عن المكتب
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/price" >
                     اسعارنا
                </Link></li>
            </ul>
            
        </div>
        <br></br>
        </>
    )
}

export default Nav