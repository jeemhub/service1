import { documentId } from "firebase/firestore";
import Link from "next/link"
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default () => {
    const router = useRouter();
    const { user, login } = useAuth();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            await login(data.email, data.password);
            router.push('/dashbord');
        }
        catch (err) {
            alert('خطأ // Error');
            console.log(err);
        }
    };
    return(
        <>
        {console.log(process.env.customKey)}
            <div className="h-screen w-full flex justify-center items-center ">
                <div className="flex flex-col items-center bg-slate-50 rounded-lg h-2/5 w-4/5 md:w-2/5 p-4 gap-3">
                    <h1 className="font-bold text-3xl text-black mb-4 text-center">
                        لوحة التحكم
                    </h1>
                    <input onChange={(e) => setData({
            ...data,
            email: e.target.value,
        })} value={data.email} required type="email" placeholder="ادخل اسم المستخدم " className="p-2 w-full h-2/5 bg-slate-300 text-black rounded-md"></input>
                    <input onChange={(e) => setData({
            ...data,
            password: e.target.value,
        })} value={data.password} required type='password' placeholder="ادخل كلمة السر " className="p-2 w-full h-2/5 bg-slate-300 text-black rounded-md"></input>
                    <Link href='/dashbord' className="font-bold w-full bg-blue-600 text-white rounded-md h-2/5 mt-4">
                    <button onClick={handleLogin} className="font-bold w-full bg-blue-600 text-white rounded-md h-2/5 mt-4">تسجيل دخول</button>
                    </Link>
                    <Link href='/'><h1 className='text-blue-600 font-bold m-1 text-xl'>اذهب الى الصفحة الرئيسية</h1></Link>
                </div>
            </div>
        </>
    )
}