import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { useRef } from "react";
import { storage ,db} from "../firebase";
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
    const titleRef=useRef();
    const detailsRef=useRef();
    const fileRef=useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();
  const [title,settitle]=useState();
  const [details,setdetails]=useState();
  const offerCollectionRef = collection(db, "posts");

  const  uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `posts/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((snn) => {
        addDoc(offerCollectionRef,{
            title:title,
            details:details,
            url:snn
        });
        titleRef.current.value=null;
        detailsRef.current.value=null;
        fileRef.current.value=null;
      });
    });
    
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
        </div>
    </div>
  );
}

export default App;