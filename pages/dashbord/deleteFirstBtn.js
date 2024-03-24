import Nav from "../../components/Nav"

import Profile from "../../components/ProfiledelFirsrBtn";
import {db} from '../../firebase'
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default () => {
    const profilesCollectionRef = collection(db, "firstBtn");
    const [profiles, setposts] = useState([]);

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

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
        <select className="border border-gray-500 p-2 mb-4 rounded-md bg-gray-300 text-black" onChange={handleOptionChange}>
        <option value="" disabled selected hidden>اختر الدولة || Select the country</option>
        <option value="India">الهند | India</option>
        <option value="Philippines"> الفلبين | Philippines</option>
        <option value="Indonesia">اندونيسيا | Indonesia</option>
        <option value="Ethiopia">اثيوبيا | Ethiopia</option>
        <option value="SriLanka">سريلانكا | SriLanka</option>
        <option value=''>الكل | all</option>
      </select>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-auto mt-1 w-full">
                {console.log(profiles)}
                {selectedOption!=''?
                profiles.filter(el=>{return el.country== selectedOption}).map((profile)=>{
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
              })
                :  
                profiles.map((profile)=>{
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
                })
              }
            </div>
        </div>
        </>
    )
}