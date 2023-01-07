import imgpri from '../public/prices.jpg'
import Nav from '../components/Nav'
import Image from 'next/image'
export default () => {
    return(
        <>
        <Nav></Nav>
        <div className='flex flex-col justify-center items-center h-screen w-full p-10'>
            <Image src={imgpri} width={900} className=''></Image>
        </div>
        </>
    )
}