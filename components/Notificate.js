import Link from "next/link";
export default (props) => {
    return(
        <>
            <div className="bg-white rounded-lg h-3/12 md:w-4/6 w-full flex flex-col items-end p-4 gap-2 mt-2">
                    <h1 className="font-bold text-2xl">{props.name}</h1>
                    <h1 className=""> {props.number}</h1>
                    <h1 className="">{props.address}</h1>
                   <Link className="rounded-md bg-blue-600 text-white font-bold p-2 text-center w-full" href={`/notifications/orderSecBtn/${props.id}`}>
                    <button className="rounded-md bg-blue-600 text-white font-bold p-2 text-center w-full">تفاصيل الطلب</button>
                   </Link>
                    
                </div>
        </>
    )
}