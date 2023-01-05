import Link from "next/link"
export default () => {
    return(
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center p-4">
            <Link className="text-gray-900 bg-white font-bold p-2  rounded-md m-1" href='/'>
                <button className="">طلبات عاملاتنا بالطلب</button>
             </Link>
             <Link className="text-white font-bold border-solid p-2 border-2 border-white rounded-md m-1" href='/notifications/orderSecBtn'>
                <button className="">طلبات خدمة التحويل المحلي</button>
             </Link>
             
             <Link className="text-white font-bold  p-2 rounded-md m-1" href='/dashbord'>
                <button className="">الرجوع الى لوحة التحكم</button>
             </Link>

             
            </div>
        </>
    )
}