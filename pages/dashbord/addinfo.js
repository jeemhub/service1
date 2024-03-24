import { useState } from "react";
import { useRouter } from "next/router";
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

export default function App(props) {
    const textRef=useRef();
    const typeRef=useRef();
    const router=useRouter();

  const [text,settext]=useState();
  const [type,settype]=useState('h1');
  const offerCollectionRef = collection(db, "info");
  const updatacounter=async(co)=>{
      const countDoc=doc(db,'infocounter','counter');
    const Newcounter={num:co+1};
    await updateDoc(countDoc,Newcounter)
  }
  const  uploadFile = (x) => {

    settype(typeRef.current.value);
    if(!text){
      alert("ادخل العنوان")
      return
    }
    if (text &&  type){

        addDoc(offerCollectionRef,{
            id:x,
            text:textRef.current.value,
            type:typeRef.current.value,
        });
        updatacounter(x)
    }
        textRef.current.value=null;
        typeRef.current.value=null;
        router.push('/dashbord');
      
    }
    
  

  return (
    <div  className="h-screen w-full flex flex-col gap-2 justify-center items-center">
      {/* <button className='font-bold text-white text-2xl m-2 p-2 bg-blue-600 rounded-lg' onClick={()=>updatacounter(props.a)}>incress the counter</button> */}
      {/* {console.log(props.a)} */}
        <div className="md:w-3/5 w-4/5 gap-2 flex flex-col bg-white p-3 rounded-xl">
            <h1 className="text-2xl font-bold mb-4 self-center">اضف الى معلومات تهمك</h1>
      <input
        ref={textRef}
        placeholder="اكتب عنوان المعلومة"
        className="bg-gray-300 rounded-md p-2 w-full rtl text-right"
        type="text"
        onChange={(event) => {

          settext(event.target.value);
        }}
      />
      <select ref={typeRef}  className="bg-gray-300 rounded-md p-2 w-full" onChange={(event)=>{settype(event.target.value);}}>
        <option value={`h1`} key='h1'>
          عنوان
        </option>
        <option value='p' key='p'>
          نص
        </option>
      </select>
      {/* <input
      ref={detailsRef}
      placeholder="اكتب تفاصيل المعلومة"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setdetails(event.target.value);
        }}
      /> */}
      <button className="font-bold text-white text-2xl bg-blue-600 p-2 rounded-md w-full mt-2" onClick={()=>uploadFile(props.a)}>اضف خبر</button>
      <Link className="text-blue-600 text-center font-bold  p-1 rounded-md" href='/dashbord'>
                <button className="">الرجوع الى لوحة التحكم</button>
             </Link>
        </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const postsCollectionRef = collection(db, "infocounter");
  const data = await getDocs(postsCollectionRef);
  var data2=data.docs.map((doc) => ({ ...doc.data(),id:doc.id}))
  return {
    props: {
      a:data2[0].num
    }, // will be passed to the page component as props
  }
}