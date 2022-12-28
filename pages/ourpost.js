import Nav from "../components/Nav"
import Offer from "../components/Post"
export default function ourpost(){
    return(
    <main>
        <Nav/>
        <div className="h-screen flex flex-col justify-start items-end bg-gray-900 mt-24 p-5 text-white">
        <h1 className="text-5xl font-bold mb-5">اخر الاخبار</h1>
        <Offer/>
        <Offer/>
        <Offer/>
        </div>
    </main>
    )
}