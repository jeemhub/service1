import { useRouter } from "next/navigation";
import { doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import {db} from '../firebase'
export default (props) => {
    const router = useRouter();

    const DeletePost=async(id)=>{
        const userdoc=doc(db,'posts',id);
        await deleteDoc(userdoc);
        router.refresh();

      }
    return (
        <>
            <div className="bg-white text-gray-900 h-auto md:w-auto w-full   rounded-md mt-5 p-2 flex flex-col items-end">
                <h1 className="font-bold text-2xl">
                    {props.title}
                </h1>
                <p className="text-xl">
                    {props.details}
                </p>
                {props.url && <img src={props.url} className='self-center' width={400} height={50}></img> }
                {props.id && <button onClick={()=>DeletePost(props.id)} className='m-2 rounded-lg p-2 self-center w-full bg-red-600 font-bold text-xl'>حذف</button> }
            </div>
        </>
    )
}