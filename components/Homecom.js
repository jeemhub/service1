import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
export default function Homecom() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-white text-3xl font-bold mb-5 md:text-6xl">
        اسرع واسهل طريقة للبحث
      </h1>
      <h1 className="text-white text-3xl font-bold mb-5 md:text-6xl">
        عن الخدم والعمال
      </h1>
      <button className="text-gray-900 px-7 bg-blue-600 p-2 mt-4 font-bold rounded-2xl text-3xl">
        <Link href="firstbtn">
      عاملاتنا بالطلب
        </Link>
      </button>
      <button className="text-blue-600  p-2 mt-4 border-solid border-blue-600 border-2 rounded-2xl text-3xl">
        <Link href="secbtn">
           خدمة تحويل محلي
        </Link>
      </button>
      <div className="text-3xl text-white mt-5 flex flex-row">
      <button className="mx-1"><FaWhatsapp/></button>
      <button className="mx-1"><FaFacebookF/></button>
      <button className="mx-1"><FaInstagram/></button>
      </div>
      
    </div>
  )
}

