import Nav from "../components/Nav"
import Offer from "../components/Offer.js"
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import {db} from '../firebase'
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default function ourpost(){
  const offersCollectionRef = collection(db, "offers");
    const [offers, setoffers] = useState([]);
    useEffect(() => {
      const getposts = async () => {
        const data = await getDocs(offersCollectionRef);
        setoffers(data.docs.map((doc) => ({ ...doc.data()})));
      };
  
      getposts();
    }, []);
    return(
    <main>
       
        <Nav/>
        <div className="h-screen flex flex-col justify-start items-center bg-white mt-24 p-5 text-black mb-8 pb-8">
        <h1 className="text-5xl font-bold mb-5 sticky sticky top-20 bg-white w-full text-center p-8">آخر العروض</h1>
    
        {offers.map((offer)=>{
            return(<Offer title={offer.title} details={offer.details} key={v4()} url={offer.url}></Offer>)
        })}
        </div>
    </main>
    )
}
