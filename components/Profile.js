import Image from "next/image"
import imgurl from "../public/test.jpg"
export default () => {
    return(
        <>
            <div className="flex flex-row justify-end gap-1 bg-white h-32 rounded-xl">
               
                <div className="flex flex-col gap-2 items-end">
                    <h1 className="font-bold text-lg">جاسم العتيبي</h1>
                    <div className="flex flex-row gap-1 text-white">
                        <h3 className="p-1 rounded-lg bg-gray-900">الدولة</h3>
                        <h3 className="p-1 rounded-lg bg-gray-900">نوع العمل</h3>
                    </div>
                    <button className="p-1 rounded-lg bg-blue-600 text-white font-bold">المزيد من التفاصيل</button>
                </div>
                <div>
                    <Image src={imgurl} width={80} height={80}></Image>
                </div>
            </div>
           
        </>
    )
}