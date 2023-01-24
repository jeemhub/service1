import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import { useState } from "react";
import { storage ,db} from "../../firebase";
import { v4 } from "uuid";


export default () => {
    const router=useRouter();
    const [text,settext]=useState()
  const updatesnap = async () => {
    const pricesdoc = doc(db, "social", "url");
    const imgurl = { snap: text };
    await updateDoc(pricesdoc, imgurl);
    router.back();
  };
  const updateinsta = async () => {
    const pricesdoc = doc(db, "social", "url");
    const imgurl = { insta: text };
    await updateDoc(pricesdoc, imgurl);
    router.back();
  };
  const updatetiktok = async () => {
    const pricesdoc = doc(db, "social", "url");
    const imgurl = { tiktok: text };
    await updateDoc(pricesdoc, imgurl);
    router.back();
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center p-4">
        <div className="md:w-3/5 w-4/5 gap-2 flex flex-col bg-white p-3 rounded-xl">
          <h1 className="text-2xl font-bold mb-2 text-center">عدل الروابط</h1>
          <input
            type="text"
            className="bg-gray-300 text-black p-2 rounded-lg"
            onChange={(event) => {
                 settext(event.currentTarget.value)
            }}
          />
          
          <button
            className="bg-yellow-400  rounded-md text-white text-xl font-bold p-2 m-1"
            onClick={updatesnap}
          >
            عدل رابط السناب
          </button>
          <button
            className="bg-pink-600  rounded-md text-white text-xl font-bold p-2 m-1"
            onClick={updateinsta}
          >
            عدل رابط الانستجرام
          </button>
          <button
            className="bg-slate-800  rounded-md text-white text-xl font-bold p-2 m-1"
            onClick={updatetiktok}
          >
            عدل رابط التك توك
          </button>
        </div>
      </div>
    </>
  );
};
