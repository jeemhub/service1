import imgpri from '../public/prices.jpg'
import Nav from '../components/Nav'
import Image from 'next/image'
import {db} from '../firebase'
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default () => {
    const router=useRouter()
    const offersCollectionRef = collection(db, "prices");
    const [offers, setoffers] = useState();
    useEffect(()=>{
        const getposts = async () => {
            const data = await getDocs(offersCollectionRef);
            setoffers(data.docs.map((doc) => ({ ...doc.data()})));
          };
          getposts();
    },[])
    return(
        <>
        {offers?console.log(offers[0].imgurl):console.log('no image')}
        <Nav></Nav>
        <div className='flex flex-col justify-center items-center h-screen w-full p-10'>
            <img 
            onClick={()=>{router.push(offers?offers[0].imgurl:console.log('no image'))}}
            src={offers?offers[0].imgurl:console.log('no image')} 
            width={500}  className='' alt='prices'></img>
        </div>
        </>
    )
}