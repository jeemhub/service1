import { db } from '../../../firebase'
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { addDoc } from 'firebase/firestore';
import Nav from "../../../components/Nav"
import { useRouter } from "next/router";
import { useRef } from 'react';
export default () => {
    const router = useRouter()
  const profilesCollectionRef = collection(db, "secBtn");
  const [profiles, setposts] = useState([]);
//==========================================================
  const nameRef=useRef();
  const numberRef=useRef();
  const addressRef=useRef();
const [name,setname]=useState();
const [number,setnumber]=useState();
const [address,setaddress]=useState();
const offerCollectionRef = collection(db, "notifications");

const  uploadFile = () => {
 
      addDoc(offerCollectionRef,{
          id:v4(),
          name:name,
          number:number,
          address:address,
          order:profile[0]
      });
      nameRef.current.value=null;
      numberRef.current.value=null;
      addressRef.current.value=null;
      router.push('/')
  
  
};
//==========================================================
  useEffect(() => {
    const getprofiles = async () => {
      const data = await getDocs(profilesCollectionRef);
      setposts(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getprofiles();
  }, []);
  const profile = profiles.filter((ele) => {
    return ele.id == router.query.order;
  })

    return(
        <>  
     
        <Nav></Nav>
        <div className='flex flex-col justify-center items-center h-screen w-full  px-2'>
            <div className='flex flex-col justify-center items-center gap-2 bg-white p-2 rounded-lg'>
            <input onChange={(e)=>setname(e.target.value)} ref={nameRef} className='p-2 bg-gray-200 rounded-md' type="text" placeholder='اكتب اسمك هنا' />
            <input onChange={(e)=>setnumber(e.target.value)} ref={numberRef} className='p-2 bg-gray-200 rounded-md' type="text" placeholder='اكتب رقم جوالك' />
            <input onChange={(e)=>setaddress(e.target.value)} ref={addressRef} className='p-2 bg-gray-200 rounded-md' type="text" placeholder='اكتب  عنوانك' />
            <button className='bg-blue-600 w-full p-2 rounded-md font-bold' onClick={uploadFile}>ارسل</button>
            </div>
        </div>
        </>
    )
}