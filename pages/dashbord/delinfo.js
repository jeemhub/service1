import { db } from "../../firebase";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
export default function ourpost(props) {
  const router = useRouter();
  const DeletePost = async (id) => {
    const userdoc = doc(db, "info", id);
    await deleteDoc(userdoc);
    router.push("/dashbord/delinfo");
  };
  function sortArrayOfObjectById(arr) {
    var lengthOfArray = arr.length;
    var newArray = arr.map((el) => {
      return el.id;
    });
    newArray = newArray.sort();
    var result = [];
    for (var i = 0; i < lengthOfArray; i++) {
      for (var j = 0; j < lengthOfArray; j++) {
        if (arr[j].id == newArray[i]) {
          result.push(arr[j]);
        }
      }
    }
    return result;
  }
  return (
    <main>
      {console.log(sortArrayOfObjectById(props.arr))}

      <div className="h-screen flex flex-col justify-start items-end bg-gray-900 mt-24 p-5 text-white">
        <h1 className="text-5xl font-bold mb-5"> حذف معلومات</h1>
        {sortArrayOfObjectById(props.arr).map((post) => {
          if (post.type == "h1") {
            return (
              <div
                key={v4()}
                className="rtl text-right border-white  my-2 p-1 border-solid border-2 w-full md:w-2/4">
                <h1 className="text-4xl font-bold">{post.text}</h1>
                <button
                  onClick={() => DeletePost(post.ip)}
                  className="bg-red-600 text-white font-bold text-xl p-2 m-2 rounded-lg w-2/4" >
                  حذف
                </button>

                <br></br>
              </div>
            );
          }
          if (post.type == "p") {
            return (
              <div
                key={v4()}
                className="rtl text-right  my-2 p-1 border-solid border-2 border-white w-full md:w-2/4"
              >
                <p className="text-xl">{post.text}</p>
                <button
                  onClick={() => DeletePost(post.ip)}
                  className="bg-red-600 text-white font-bold text-xl p-2 m-2 rounded-lg w-1/4">
                  حذف
                </button>

                <br></br>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}
export async function getStaticProps(context) {
  const postsCollectionRef = collection(db, "info");
  const data = await getDocs(postsCollectionRef);
  const arr = data.docs.map((doc) => ({ ...doc.data(), ip: doc.id }));
  return {
    props: {
      arr: arr,
    }, // will be passed to the page component as props
  };
}
