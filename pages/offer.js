import Nav from "../components/Nav"
import Post from "../components/Post"
export default function ourpost(props){
    return(
    <main>
        {console.log(props.data.name)}
        <Nav/>
        <div className="h-screen flex flex-col justify-start items-end bg-gray-900 mt-24 p-5 text-white">
        <h1 className="text-5xl font-bold mb-5">اخر العروض</h1>
        <Post/>
        <Post/>
        <Post/>
        </div>
    </main>
    )
}
export async function getServerSideProps(context) {
    const res= await fetch('http://localhost:3000/api/hello');
    const data=await res.json()
    return {
      props: {
        data:data
      }, // will be passed to the page component as props
    }
  }