import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { useRef } from "react";
import { storage ,db} from "../../firebase";
import Link from "next/link";

import { v4 } from "uuid";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";


function App() {
  const router=useRouter()
    const titleRef=useRef(' ');
    const detailsRef=useRef(' ');
    const fileRef=useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();
  const [title,settitle]=useState();
  const [details,setdetails]=useState();
  const offerCollectionRef = collection(db, "posts");

  const  uploadFile = () => {
    if(!title){
      alert("ادخل العنوان")
      return
    }
    if(!details){
      setdetails(" ")
    }
    if(!imageUpload){
      alert("ادخل صورة الخبر")
      return
    }
    if (imageUpload == null) return;
    const imageRef = ref(storage, `posts/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((snn) => {
        addDoc(offerCollectionRef,{
            title:title,
            details:details,
            url:snn
        });
      });
    });
    router.back();
  };

  return (
    <div  className="h-screen w-full flex flex-col gap-2 justify-center items-center">
        <div className="md:w-3/5 w-4/5 gap-2 flex flex-col bg-white p-3 rounded-xl">
            <h1 className="text-2xl font-bold mb-4 self-center">ادخل معلومات الخبر</h1>
      <input
        ref={titleRef}
        placeholder="اكتب عنوان الخبر"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {

          settitle(event.target.value);
        }}
      />
      <input
      ref={detailsRef}
      placeholder="اكتب تفاصيل الخبر"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          
          setdetails(event.target.value);
        }}
      />
      <input
      ref={fileRef}
        className="bg-gray-300 rounded-md p-2 w-full"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
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