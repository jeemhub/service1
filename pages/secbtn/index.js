import Nav from "../../components/Nav"
import Link from "next/link";
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
      function getUniqueLocations(array) {
        // Create a new Set to store unique locations
        const uniqueLocations = new Set();
    
        // Loop through the array and add each 'na' value to the Set
        array.forEach(item => uniqueLocations.add(item.nationality));
    
        // Convert the Set back to an array
        return Array.from(uniqueLocations);
    }
    
    var uniqueLocations = getUniqueLocations(profiles);
    return(
        <>
        <Nav></Nav>
        <div className="flex flex-col justify-start p-2  items-center mt-24 mb-5 bg-white h-screen">
            {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-auto mt-1 w-full"> */}
                {console.log(uniqueLocations)}
                <div className="flex flex-col gap-2 text-black justify-center items-center">
                <h1 className="text-4xl font-bold text-black mb-4">اختر دولة</h1>
                {uniqueLocations.map(e=>(
                    <Link href={`/secbtn/nation/${e}`}>
                    <button className="cursor-pointer hover:bg-blue-600 px-16 duration-500 hover:text-white py-2 rounded-md">{e}</button>
                    </Link>
                    ))}
                </div>

                
                {/* {profiles.map((profile)=>{
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
                })} */}
            {/* </div> */}
        </div>
        </>
    )
}