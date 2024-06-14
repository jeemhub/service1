import { db } from '../../firebase'
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import Nav from "../../components/Nav"
import { useRouter } from "next/router";
import Link from "next/link";
export default () => {
  const message = "مرحبا اريد ان اطلب هذه االعاملة";
  const n='%0a';
  const router = useRouter()
  const [profiles, setposts] = useState([]);
  const profilesCollectionRef = collection(db, "secBtn");
  useEffect(() => {
    const getprofiles = async () => {
      const data = await getDocs(profilesCollectionRef);
      setposts(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getprofiles();
  }, []);
  const profile = profiles.filter((ele) => {
    return ele.id == router.query.id;
  })

  return (
    <>
      <Nav></Nav>
      {console.log(profile[0])}
      <br></br>
      <div className="flex items-center flex-col  p-2 justify-center h-auto mt-12">
        <div className=" rounded-lg">
      <img className=" rounded-lg" onClick={()=>{router.push(profile[0]?.url)}} src={profile[0]?.url} height={100} width={160}></img>
        </div>
      <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden m-4">
        <table className="w-full text-center table-collapse">
          <tbody>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{profile[0]?.name}</td>
              <td className="py-4 px-6 border-b border-gray-400">الاسم</td>
            </tr>
            <tr className="text-right bg-gray-200">
              <td className="py-4 px-6 border-b border-gray-400">{profile[0]?.nationality}</td>
              <td className="py-4 px-6 border-b border-gray-400">الجنسية</td>
            </tr>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{profile[0]?.Age}</td>
              <td className="py-4 px-6 border-b border-gray-400">العمر</td>
            </tr>
            <tr className="text-right bg-gray-200">
              <td className="py-4 px-6 border-b border-gray-400">{profile[0]?.social}</td>
              <td className="py-4 px-6 border-b border-gray-400">الحالة الاجتماعية</td>
            </tr>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{profile[0]?.work}</td>
              <td className="py-4 px-6 border-b border-gray-400">المهنة</td>
            </tr>
            <tr className="text-right bg-gray-200">
              <td className="py-4 px-6 border-b border-gray-400">{profile[0]?.experience}</td>
              <td className="py-4 px-6 border-b border-gray-400">سنوات الخبرة</td>
            </tr>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{profile[0]?.salary}</td>
              <td className="py-4 px-6 border-b border-gray-400">الراتب الشهري</td>
            </tr>
            </tbody>
            </table>
              {/* <Link className="text-white bg-blue-600 my-2 text-center font-bold rounded-lg w-full p-2" href={`/secbtn/order/${profile[0]?.id}`}>
                  <button className="text-white bg-blue-600 my-2 text-center font-bold rounded-lg w-full p-2">اطلب</button>
              </Link> */}
                  <a 
        href={`https://api.whatsapp.com/send?phone=+97333401013&text=${message+n}العمر ${profile[0]?.Age+n}الجنسية ${profile[0]?.nationality+n} السعر ${profile[0]?.salary+n} الخبرة ${profile[0]?.experience+n} اسم العاملة ${profile[0]?.name+n}`}
        className="text-white bg-green-600 my-2 text-center font-bold rounded-lg w-full p-2 block">اطلب باستخدام الواتساب</a>
            </div>
            </div>

    </>
  )
}