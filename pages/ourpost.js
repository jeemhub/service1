import Nav from "../components/Nav"
import Post from "../components/Post"
import {db} from '../firebase'
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default function ourpost(){
    const postsCollectionRef = collection(db, "posts");
    const [posts, setposts] = useState([]);
    useEffect(() => {
        const getposts = async () => {
          const data = await getDocs(postsCollectionRef);
          setposts(data.docs.map((doc) => ({ ...doc.data()})));
        };
    
        getposts();
      }, []);
    return(
    <main>
        {console.log(posts)}
        <Nav/>
        <div className="h-auto flex flex-col justify-start items-center bg-white mt-24 p-5 text-black">
        <h1 className="text-5xl font-bold mb-5">آخر الأخبار</h1>
        
        {posts.map((post)=>{
            return(<Post title={post.title} details={post.details} key={v4()} url={post.url}></Post>)
        })}
      
        </div>
    </main>
    )
}