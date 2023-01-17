import Nav from "../components/Nav"
import Post from "../components/Post"
import {db} from '../firebase'
import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

export default function ourpost(props){
  function sortArrayOfObjectById(arr){
   var lengthOfArray=arr.length;
   var newArray=arr.map(el=>{return(el.id)})
    newArray=newArray.sort()
    var result=[];
  for(var i=0;i<lengthOfArray;i++){
        for(var j=0;j<lengthOfArray;j++){
            if(arr[j].id == newArray[i]){
                result.push(arr[j]);
            }
        }
    }
    return(result);
}
    return(
    <main>
        {console.log(sortArrayOfObjectById(props.arr))}
        
        <Nav/>
        
        <div className="h-screen flex flex-col justify-start items-end bg-gray-900 mt-24 p-5 text-white">
        <h1 className="text-5xl font-bold mb-5"> معلومات تهمك</h1>
        {sortArrayOfObjectById(props.arr).map((post)=>{
          if(post.type == 'h1'){
            return(
            <div key={v4()}  className="rtl text-right border-white  my-2 p-1">
            <h1 className="text-4xl font-bold" >{post.text}</h1>
             <br></br>
            </div>
            )}
          if(post.type == 'p'){
            return(
            <div key={v4()}  className="rtl text-right p-1">
            <p className="text-xl">{post.text}</p>
             <br></br>
            </div>
            )}
        })}
        </div>
    </main>
    )
}
export async function getServerSideProps(context) {
  const postsCollectionRef = collection(db, "info");
  const data = await getDocs(postsCollectionRef);
  const arr=data.docs.map((doc) => ({ ...doc.data()}))
  return {
    props: {
      arr:arr
    }, // will be passed to the page component as props
  }
}