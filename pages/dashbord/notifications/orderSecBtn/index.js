import Notificate from '../../../../components/Notificate';
import {db} from '../../../../firebase'
import Link from 'next/link';
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default function orderSecBtn(){
  const notificationsCollectionRef = collection(db, "notifications");
    const [notifications, setnotifications] = useState([]);
    useEffect(() => {
        const getnotifications = async () => {
          const data = await getDocs(notificationsCollectionRef);
          setnotifications(data.docs.map((doc) => ({ ...doc.data()})));
        };
    
        getnotifications();
      }, []);
    return(
        <> 
        {console.log(notifications)}
            <div className="h-screen w-full flex flex-col items-center p-2 md:px-32">
        <Link href='/dashbord' className='text-white font-bold border-solid p-2 border-2 border-white rounded-md'><button >الرجوع الى لوحة التحكم</button></Link>
                {
                  notifications.map((el)=><Notificate name={el.name} number={el.number} address={el.address} order={el.order} id={el.id} key={el.id}/>)
                }
              
                
                
               
            </div>
        </>
    )
}