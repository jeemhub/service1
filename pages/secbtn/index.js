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
          setposts(data.docs.map((doc) => ({ ...doc.data()})));
        };
    
        getprofiles();
      }, []);
    // const [sel1, setsel1] = useState();
    // const [sel2, setsel2] = useState();
    // const [sel3, setsel3] = useState();
    // const [sel4, setsel4] = useState();
    return(
        <>
        <Nav></Nav>
        <div className="flex flex-col justify-start p-2  items-center mt-24 mb-5 bg-gray-900 h-screen">
            {/* <div className="h-auto p-2 w-auto m-2 mx-1 flex flex-row justify-end bg-white rounded-md gap-1">
                <select onChange={(e)=>{setsel1(e.target.value)}}>
                    <option selected value="ahmed" key="key1">الدولة</option>
                    <option value="mohammed" key="key2">mohammed</option>
                    <option value="ali" key="key3">ali</option>
                </select>
                <select onChange={(e)=>{setsel2(e.target.value)}}>
                    <option selected value="baghdad" key="key1">الجنس</option>
                    <option value="basra" key="key2">basra</option>
                    <option value="mousol" key="key3">mousol</option>
                </select>
                <select onChange={(e)=>{setsel3(e.target.value)}}>
                    <option selected value="baghdad" key="key1">العمر</option>
                    <option value="basra" key="key2">basra</option>
                    <option value="mousol" key="key3">mousol</option>
                </select> 
                <select onChange={(e)=>{setsel4(e.target.value)}}>
                    <option selected value="baghdad" key="key1">الديانة</option>
                    <option value="basra" key="key2">basra</option>
                    <option value="mousol" key="key3">mousol</option>
                </select>
           
            </div> */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-auto mt-1 w-full">
                {console.log(profiles)}
                {profiles.map((profile)=>{
                    return(<Profile
                    name={profile.name}
                    nationality={profile.nationality}
                    age={profile.age}
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