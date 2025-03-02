import Nav from "../components/Nav"
import { useEffect } from 'react';
import { useState } from 'react';
import { collection } from 'firebase/firestore';
import { db } from "../firebase";
import { getDocs } from 'firebase/firestore';
export default () => {
    const offersCollectionRef = collection(db, "social");
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
       {offers?console.log(offers[0].tiktok):console.log('no url')}
        <Nav></Nav>
        <div className="flex flex-col justify-center items-center h-screen">
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-yellow-500 border-yellow-500" href={offers?offers[0].snap:''}>Snapchat</a>
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-pink-600 border-pink-600" href={offers?offers[0].insta:''}>Instagram</a>
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-green-600 border-green-600" href="https://api.whatsapp.com/send?phone=+97333401013&text=مرحبا">Whatsapp</a>
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-white border-white" href={offers?offers[0].tiktok:''}>TikTok</a>
        </div>
        </>
    )
}
/**
    snapchat href="https://www.snapchat.com/add/umkhalifa_bh?share_id=XbouJZ3"
    instagram href="https://www.instagram.com/p/CnCmLqBIhQ5/?igshid=YmMyMTA2M2Y="
    tiktok href="https://vt.tiktok.com/ZS8rrF3gU/"
 */