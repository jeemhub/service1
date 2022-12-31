export default (props) => {
    return (
        <>
            <div className="bg-white text-gray-900 h-auto w-auto  rounded-md mt-5 p-2 flex flex-col items-end">
                <h1 className="font-bold text-2xl">
                    {props.title}
                </h1>
                <p className="text-xl">
                    {props.details}
                </p>
                <img src={props.url} className='self-center' width={400} height={50}></img>
            </div>
        </>
    )
}