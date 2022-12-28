import Link from "next/link"
export default () => {
    return(
        <>
            <div className="h-screen w-full flex justify-center items-center ">
                <div className="flex flex-col items-center bg-slate-50 rounded-lg h-2/5 w-4/5 md:w-2/5 p-4 gap-3">
                    <h1 className="font-bold text-3xl text-black mb-4 text-center">
                        لوحة التحكم
                    </h1>
                    <input type='text' placeholder="ادخل اسم المستخدم " className="p-2 w-full h-2/5 bg-slate-300 text-black rounded-md"></input>
                    <input type='password' placeholder="ادخل كلمة السر " className="p-2 w-full h-2/5 bg-slate-300 text-black rounded-md"></input>
                    <Link href='/offer' className="font-bold w-full bg-blue-600 text-white rounded-md h-2/5 mt-4">
                    <button className="font-bold w-full bg-blue-600 text-white rounded-md h-2/5 mt-4">Submite</button>
                    </Link>
                </div>
            </div>
        </>
    )
}