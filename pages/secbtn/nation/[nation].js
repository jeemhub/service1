import Nav from "../../../components/Nav"

import Profile from "../../../components/Profile";
import {db} from '../../../firebase'
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
export default () => {
    const router = useRouter();
    const profilesCollectionRef = collection(db, "secBtn");
    const [profiles, setprofiles] = useState([]);
    const [name, setName] = useState([]);
    useEffect(() => {
        var nation=router.query.nation;
        const getprofiles = async () => {
          const data = await getDocs(profilesCollectionRef);
          const data1=(data.docs.map((doc) => ({ ...doc.data()})));
            var arr=[];

            console.log('nation')
            console.log(nation)
            console.log('data')
            console.log(data1[1].nationality)
            console.log('data & nation')
            console.log(data1[1].nationality==nation)
        

            // console.log('nation')
            // console.log(nation)
            // console.log(typeof(nation))

            for(let i=0;i<data1.length;i++){
                if (data1[i].nationality==nation){
                    arr.push(data1[i]);
                }
            }
           
            setName(arr);
            console.log(name)
            
        };
        getprofiles();
      }, []);
      
    return(
        <>
        <Nav></Nav>
       
        <div className="flex flex-col justify-start p-2  items-center mt-24 mb-5 bg-white h-screen">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-auto mt-1 w-full">
                
                {name.map((profile)=>{
                  
                    return(<Profile
                    key={profile.id}
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