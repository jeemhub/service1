import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import img from '../public/photo_2023-01-08_21-24-24-removebg-preview.png'
import Link from 'next/link';
export default function Homecom() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <img 
      className="h-1/12  w-4/5 md:w-1/5"
      src='https://firebasestorage.googleapis.com/v0/b/servicestore-cc04d.appspot.com/o/photo_2023-01-08_21-24-24-removebg-preview.png?alt=media&token=527a8de9-a137-4c91-942f-dad95680d8f4' ></img>
      
      <div className="flex flex-col items-center w-full h-auto">
        <h1 className="text-white text-xl font-bold mb-2 md:text-4xl">
          هل تجد صعوبة في ايجاد العاملة المنزلية
        </h1>
        <h1 className="text-white text-xl font-bold mb-5 md:text-4xl">
          المناسبة لاحتياجاتكم؟
        </h1>
        <p className="text-white text-lg">مكتب ام خليفة يوفر لكم افضل العاملات</p>
        <p className="text-white text-lg">المنتقاة بعناية لتتوافق مع احتياجاتكم وميزانيتكم</p>
      </div>
      <button className="text-gray-900 px-7 bg-blue-600 p-2 mt-6 font-bold rounded-2xl text-2xl">
        <Link href="/firstbtn">
          عاملاتنا مطيعات بالطلب
        </Link>
      </button>
      <button className="text-blue-600  p-2 mt-2 border-solid border-blue-600 border-2 rounded-2xl text-2xl">
        <Link href="secbtn">
          عاملاتنا المنتقاة للتحويل محلي
        </Link>
      </button>
      <button className="text-blue-600  p-2 mt-4 border-solid border-blue-600 border-2 rounded-2xl text-3xl">
        <Link href="dashbord">
          لوحة التحكم
        </Link>
      </button>
      {/* <div className="text-3xl text-white mt-5 flex flex-row">
        <button className="mx-1"><FaWhatsapp /></button>
        <button className="mx-1"><FaFacebookF /></button>
        <button className="mx-1"><FaInstagram /></button>
      </div> */}

    </div>
  )
}


