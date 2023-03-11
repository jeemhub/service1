import Nav from "../../../components/Nav"

import Profile from "../../../components/Profile2";
import {db} from '../../../firebase'
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default () => {
    const profilesCollectionRef = collection(db, "firstBtn");
    const [profiles, setposts] = useState([]);
    const [national,setnational]=useState([]);
    useEffect(() => {
        const getprofiles = async () => {
          const data = await getDocs(profilesCollectionRef);
          setposts(data.docs.map((doc) => ({ ...doc.data(),ip:doc.id })))
        };
        getprofiles();
     
      }, []);
    return(
        <>
          
           
        <Nav></Nav>
        <br></br>
        <div className="flex flex-col justify-start p-2  items-center mt-24 mb-5 bg-gray-900 h-screen">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-auto mt-1 w-full">
                {profiles.filter(el=>{return el.country=='اثيوبيا'|| el.country == 'ETHIOPIA'||el.country=='Ethiopia'||el.country=='ethiopia'}).map((profile)=>{
                    return(<Profile
                    key={profile.ip}
                    name={profile.name}
                    nationality={profile.nationality}
                    Age={profile.Age}
                    social={profile.social}
                    work={profile.work}
                    experience={profile.experience}
                    salary={profile.salary}
                    url={profile.url}
                    id={profile.ip}
                    />)
                })}
            </div>
        </div>
        </>
    )
}