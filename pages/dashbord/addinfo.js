import { useState } from "react";

import { useRef } from "react";
import { db} from "../../firebase";
import Link from "next/link";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";


function App() {
    const titleRef=useRef();
    const detailsRef=useRef();

  const [title,settitle]=useState();
  const [details,setdetails]=useState();
  const offerCollectionRef = collection(db, "info");

  const  uploadFile = () => {
    if(!title){
      alert("ادخل العنوان")
      return
    }
    if(!details){
      alert("ادخل التفاصيل")
    }
    if (title && details ){
        addDoc(offerCollectionRef,{
            title:title,
            details:details,
        });
    }
        titleRef.current.value=null;
        detailsRef.current.value=null;
      
    }
    
  

  return (
    <div  className="h-screen w-full flex flex-col gap-2 justify-center items-center">
        <div className="md:w-3/5 w-4/5 gap-2 flex flex-col bg-white p-3 rounded-xl">
            <h1 className="text-2xl font-bold mb-4 self-center">اضف الى معلومات تهمك</h1>
      <input
        ref={titleRef}
        placeholder="اكتب عنوان النعلومة"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {

          settitle(event.target.value);
        }}
      />
      <input
      ref={detailsRef}
      placeholder="اكتب تفاصيل المعلومة"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setdetails(event.target.value);
        }}
      />
  
      <button className="font-bold text-white text-2xl bg-blue-600 p-2 rounded-md w-full mt-2" onClick={uploadFile}>اضف خبر</button>
      <Link className="text-blue-600 text-center font-bold  p-1 rounded-md" href='/dashbord'>
                <button className="">الرجوع الى لوحة التحكم</button>
             </Link>
        </div>
    </div>
  );
}

export default App;