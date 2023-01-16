import Nav from "../components/Nav"
export default () => {
    return(
        <>
        <Nav></Nav>
        <div className="flex flex-col justify-center items-center h-screen">
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-yellow-500 border-yellow-500" href="https://www.snapchat.com/add/umkhalifa_bh?share_id=XbouJZ3">Snapchat</a>
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-pink-600 border-pink-600" href="https://www.instagram.com/p/CnCmLqBIhQ5/?igshid=YmMyMTA2M2Y=">Instagram</a>
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-green-600 border-green-600" href="https://api.whatsapp.com/send?phone=+97333401013&text=مرحبا">Whatsapp</a>
            <a className="text-2xl p-4 px-5 rounded-lg m-4 font-bold border-solid border-2 text-white border-white" href="https://vt.tiktok.com/ZS8rrF3gU/">TikTok</a>
        </div>
        </>
    )
}