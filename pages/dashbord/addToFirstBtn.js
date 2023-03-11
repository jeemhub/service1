import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import Link from "next/link";

import { useRef } from "react";
import { storage ,db} from "../../firebase";
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
  const router=useRouter();
    const nameRef=useRef();
    const AgeRef=useRef();
    const socialRef=useRef();
    const workRef=useRef();
    const experienceRef=useRef();
    const salaryRef=useRef();
    const nationalityRef=useRef();
    const countryRef=useRef();
    const fileRef=useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();
  const [name,setname]=useState();
  const [Age,setAge]=useState();
  const [social,setsocial]=useState();
  const [work,setwork]=useState();
  const [experience,setexperience]=useState();
  const [salary,setsalary]=useState();
  const [country,setcountry]=useState();
  const [nationality,setnationality]=useState();
  const offerCollectionRef = collection(db, "firstBtn");
  const  uploadFile = () => {
    if( nameRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if( nationalityRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if(AgeRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if(socialRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if(workRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if(experienceRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if(salaryRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if(fileRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if(countryRef.current.value==''){
      alert('املئ الحقل الفارغ');
      return
    }
    if (imageUpload == null) return;
    const imageRef = ref(storage, `firstBtn/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((snn) => {
        addDoc(offerCollectionRef,{
            id:v4(),
            name:name,
            nationality:nationality,
            Age:Age,
            social:social,
            work:work,
            experience:experience,
            salary:salary,
            country:country,
            url:snn
        });
        // nameRef.current.value=null;
        // nationalityRef.current.value=null;
        // AgeRef.current.value=null;
        // socialRef.current.value=null;
        // workRef.current.value=null;
        // experienceRef.current.value=null;
        // salaryRef.current.value=null;
        // fileRef.current.value=null;
        // countryRef.current.value=null;
      });
    });
    // createUser();
    router.back()
    
  };

  return (
    <div  className="h-screen w-full flex flex-col gap-2 justify-center items-center">
        <div className="md:w-3/5 w-4/5 gap-2 flex flex-col bg-white p-3 rounded-xl">
            <h1 className="text-2xl font-bold mb-4 self-center">ادخل العامل</h1>
      <input
        ref={nameRef}
        placeholder="اكتب الاسم"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      <input
      ref={nationalityRef}
      placeholder="اكتب الجنسية"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setnationality(event.target.value);
        }}
      />
      {/* //====================================== */}
      <input
      ref={AgeRef}
      placeholder="اكتب العمر"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
    {/* //======================================= */}
      {/* //====================================== */}
      <input
      ref={socialRef}
      placeholder="اكتب الحالة الجتماعية"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setsocial(event.target.value);
        }}
      />
    {/* //======================================= */}
      {/* //====================================== */}
      <input
      ref={workRef}
      placeholder="اكتب المهنة"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setwork(event.target.value);
        }}
      />
    {/* //======================================= */}
      {/* //====================================== */}
      <input
      ref={experienceRef}
      placeholder="اكتب سنوات الخبرة"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setexperience(event.target.value);
        }}
      />
    {/* //======================================= */}
      {/* //====================================== */}
      <input
      ref={salaryRef}
      placeholder="اكتب الراتب الشهري"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setsalary(event.target.value);
        }}
      />
    {/* //======================================= */}
      {/* //====================================== */}
      <input
      ref={countryRef}
      placeholder="اكتب الدولة"
        className="bg-gray-300 rounded-md p-2 w-full"
        type="text"
        onChange={(event) => {
          setcountry(event.target.value);
        }}
      />
    {/* //======================================= */}
      <input
      ref={fileRef}
        className="bg-gray-300 rounded-md p-2 w-full"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        />
      <button className="font-bold text-white text-2xl bg-blue-600 p-2 rounded-md w-full mt-2" onClick={uploadFile}>اضف عامل</button>
      <Link className="text-blue-600 text-center font-bold  p-1 rounded-md" href='/dashbord'>
                <button className="">الرجوع الى لوحة التحكم</button>
             </Link>
        </div>
    </div>
  );
}

export default App;