import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import { useState } from "react";
import { storage ,db} from "../../firebase";
import { v4 } from "uuid";


export default () => {
  const [file, setfile] = useState(null);
    const router=useRouter();
  const updateimage = async (newurl) => {
    const pricesdoc = doc(db, "prices", "pricesimage");
    const imgurl = { imgurl: newurl };
    await updateDoc(pricesdoc, imgurl);
  };
  const uploadFile = () => {
    if (file == null) return;
    const imageRef = ref(storage, `prices/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (snn) => {
        console.log(`snn : ${snn}`);
        const pricesdoc = doc(db, "prices","pricesimage");
        const imgurl = { imgurl: snn };
       await updateDoc(pricesdoc, imgurl);     
     });
    });
    router.back();
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center p-4">
        <div className="md:w-3/5 w-4/5 gap-2 flex flex-col bg-white p-3 rounded-xl">
          <h1 className="text-2xl font-bold mb-2 text-center">اضف صورة الاسعار الجديدة</h1>
          <input
            type="file"
            onChange={(event) => {
              setfile(event.target.files[0]);
            }}
          />
          <button
            className="bg-blue-600  rounded-md text-white text-xl font-bold p-2 m-1"
            onClick={uploadFile}
          >
            ارسل
          </button>
        </div>
      </div>
    </>
  );
};
