import Nav from "../../components/Nav"
import Post from "../../components/Info"
import {db} from '../../firebase'
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default function ourpost(){
    const postsCollectionRef = collection(db, "info");
    const [posts, setposts] = useState([]);
    useEffect(() => {
        const getposts = async () => {
          const data = await getDocs(postsCollectionRef);
          setposts(data.docs.map((doc) => ({ ...doc.data(),id:doc.id})));
        };
    
        getposts();
      }, []);
    return(
    <main>
        {console.log(posts)}
        <Nav/>
        <div className="h-screen flex flex-col justify-start items-end bg-gray-900 mt-24 p-5 text-white">
        <h1 className="text-5xl font-bold mb-5">معلومات تهمك</h1>
        {posts.map((post)=>{
            return(<Post id={post.id} title={post.title} details={post.details} key={v4()} url={post.url}></Post>)
        })}
      
        </div>
    </main>
    )
}