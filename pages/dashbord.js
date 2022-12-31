import { storage } from "../firebase";
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
            <div className="pt-48 md:pt-5 h-screen bg-gray-900 text-white flex flex-col gap-1 justify-center items-center">
                <div className="md:w-3/5 w-4/5  md:h-6/12 h-8/12 flex flex-col gap-1 justify-between bg-white rounded-lg p-2 text-md">
                    <h1 className="text-gray-900 text-3xl font-bold self-center mb-4">لوحة التحكم</h1>
                    <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 xl:grid-cols-3 gap-2 bg-white">
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">الاشعارات</h1>
                            <p>هنا تجد جميع الاشعارات</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/notifications'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة عامل</h1>
                            <p>اضافة عامل الى عاملاتنا بالطلب</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/addToFirstBtn'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة عامل</h1>
                            <p>اضافة عامل الى خدمة تحويل محلي</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/addToSecBtn'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة عرض</h1>
                            <p>اضافة عرض الى صفحة العروض</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/addOffer'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
                            <h1 className="font-bold text-2xl">اضافة خبر</h1>
                            <p>اضافة عرض الى صفحة الاخبار</p>
                            <Link className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full" href='/addPost'>
                                <button className="bg-blue-500 text-white font-bold text-xl p-2 rounded-md w-full">انتقل</button>
                            </Link>
                        </div>
                        <div className="border-black border-solid gap-2 w-full border-2 flex flex-col self-center justify-center  items-center text-black p-2 h-auto rounded-lg">
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