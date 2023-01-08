import Nav from "../../components/Nav"

import Profile from "../../components/Profile";
import {db} from '../../firebase'
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default () => {
    const profilesCollectionRef = collection(db, "secBtn");
    const [profiles, setposts] = useState([]);
    useEffect(() => {
        const getprofiles = async () => {
          const data = await getDocs(profilesCollectionRef);
          setposts(data.docs.map((doc) => ({ ...doc.data(),delid:doc.id})));
        };
        getprofiles();
      }, []);
    return(
        <>
        <Nav></Nav>
        <div className="flex flex-col justify-start p-2  items-center mt-24 mb-5 bg-gray-900 h-screen">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-auto mt-1 w-full">
                {console.log(profiles)}
                {profiles.map((profile)=>{
                    return(<Profile
                    delid={profile.delid}
                    name={profile.name}
                    nationality={profile.nationality}
                    Age={profile.Age}
                    social={profile.social}
                    work={profile.work}
                    experience={profile.experience}
                    salary={profile.salary}
                    url={profile.url}
                    id={profile.id}
                    />)
                })}
            </div>
        </div>
        </>
    )
}