import { storage } from "../../firebase";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { useState,useEffect } from "react";
  import Link from "next/link";
export default () => {
 
    return(
        <>
       
            <div className="pt-54  md:pt-5 h-auto mt-10 bg-gray-900 text-white flex flex-col gap-1 justify-center items-center">
                <div className="md:w-3/5 w-4/5  md:h-6/12 h-8/12 flex flex-col gap-1 justify-between bg-white rounded-lg p-2 text-md">
                    <h1 className="text-gray-900 text-3xl font-bold self-center mb-4">لوحة التحكم</h1>
                    <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 xl:grid-cols-3 gap-2 bg-white">
                        {/* <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">الاشعارات</h1>
                            <p>هنا تجد جميع الاشعارات</p>
                            <Link className="bg-gray-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/'>
                                <button className="bg-gray-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div> */}
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة عامل</h1>
                            <p>اضافة عامل الى عاملاتنا بالطلب</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord/addToFirstBtn'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة عامل</h1>
                            <p>اضافة عامل الى خدمة تحويل محلي</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord/addToSecBtn'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة عرض</h1>
                            <p>اضافة عرض الى صفحة العروض</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord/addOffer'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة خبر</h1>
                            <p>اضافة عرض الى صفحة الاخبار</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord/addPost'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">حذف العروض</h1>
                            <p> حذف من صفحة العروض</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord//deleteoffer'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full"> انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">حذف الاخبار</h1>
                            <p> حذف من صفحة الاخبار</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord/deletepost'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full"> انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">حذف عاملة</h1>
                            <p> حذف عاملة من خدمة التحويل المحلي</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord/deleteSecBtn'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full"> انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">حذف عاملة</h1>
                            <p> حذف عاملة من عاملاتنا بالطلب </p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/dashbord/deleteFirstBtn'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full"> انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col md:col-span-3 self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl"> الصفحة الرئيسية</h1>
                            <p>   انتقل الى الصفحة الرئيسية من الموقع</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full"> انتقل</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}