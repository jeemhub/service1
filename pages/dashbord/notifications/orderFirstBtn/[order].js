import { useRouter } from "next/router"
import { collection } from "firebase/firestore";
import {db} from '../../../firebase';
import { getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { useEffect,useState } from "react";
import Link from "next/link";
export default () => {
const router=useRouter();
const [notifications,setnotifications]=useState([])
const noteficationCollectionRef=collection(db,'notifications')
useEffect(() => {
    const getnotifications = async () => {
      const data = await getDocs(noteficationCollectionRef);
      setnotifications(data.docs.map((doc) => ({ ...doc.data(), ip:doc.id })));
    };
    getnotifications();
  }, []);
  const notification = notifications.filter((ele) => {
    return ele.id == router.query.order;
  })
const DeleteNotification=async(id)=>{
  const userdoc=doc(db,'notifications',id);
  await deleteDoc(userdoc);
  router.push('/notifications/orderSecBtn');
}
    return(
        <>
      {console.log(notification[0])}
      <br></br>
      <div className="flex items-center flex-col  p-2 justify-center h-auto">
        <div className=" rounded-lg">
      <img className=" rounded-lg" src={notification[0]?.order.url} height={100} width={160}></img>
        </div>
      <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden m-4">
      <h1 className="text-white font-bold p-2 text-center border-solid border-2 border-white my-2">معلومات الطلب </h1>
        <table className="w-full text-center table-collapse mb-2">
          <tbody>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.order.name}</td>
              <td className="py-4 px-6 border-b border-gray-400">الاسم</td>
            </tr>
            <tr className="text-right bg-gray-200">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.order.nationality}</td>
              <td className="py-4 px-6 border-b border-gray-400">الجنسية</td>
            </tr>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.order.Age}</td>
              <td className="py-4 px-6 border-b border-gray-400">العمر</td>
            </tr>
            <tr className="text-right bg-gray-200">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.order.social}</td>
              <td className="py-4 px-6 border-b border-gray-400">الحالة الاجتماعية</td>
            </tr>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.order.work}</td>
              <td className="py-4 px-6 border-b border-gray-400">المهنة</td>
            </tr>
            <tr className="text-right bg-gray-200">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.order.experience}</td>
              <td className="py-4 px-6 border-b border-gray-400">سنوات الخبرة</td>
            </tr>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.order.salary}</td>
              <td className="py-4 px-6 border-b border-gray-400">الراتب الشهري</td>
            </tr>
            </tbody>
            </table>
            <h1 className="text-white font-bold p-2 text-center border-solid border-2 border-white">معلومات العميل </h1>
        <table className="w-full text-center table-collapse mt-2">
          <tbody>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.name}</td>
              <td className="py-4 px-6 border-b border-gray-400">اسم العميل </td>
            </tr>
            <tr className="text-right bg-gray-200">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.number}</td>
              <td className="py-4 px-6 border-b border-gray-400">رقم جوال العميل</td>
            </tr>
            <tr className="text-right bg-gray-100">
              <td className="py-4 px-6 border-b border-gray-400">{notification[0]?.address}</td>
              <td className="py-4 px-6 border-b border-gray-400">عنوان العميل</td>
            </tr>
            
            </tbody>
            </table>
             <button onClick={()=>DeleteNotification(notification[0]?.ip)} className="bg-red-500 font-bold w-full text-white my-2 rounded-md p-2 text-center">حذف الطلب من لوحة الاشعارات</button>
            </div>
            </div>
      
        
        </>
    )
}