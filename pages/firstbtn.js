import Nav from "../components/Nav"
export default () => {
    return(
        <>
        <Nav></Nav>
        <div className="flex flex-col justify-center items-center mt-24 mb-5 bg-gray-900 h-screen">
            <h1 className="text-4xl font-bold text-white">اختر دولة</h1>
            <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold">الهند</button>
        </div>
        </>
    )
}