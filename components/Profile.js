import Image from "next/image";
import imgurl from "../public/test.jpg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
export default (props) => {
  const message = "مرحبا اريد ان اطلب هذه االعاملة";
  const n='%0a';

  return (
    <>
      <div className="flex flex-row justify-end  gap-1 bg-white h-auto rounded-xl overflow-hidden">
      <a 
        className="self-start m-6 text-green-600 text-4xl"
        href={`https://api.whatsapp.com/send?phone=+97333401013&text=${message+n}العمر ${props.Age+n}الجنسية ${props.nationality+n} السعر ${props.salary+n} الخبرة ${props.experience+n} اسم العاملة ${props.name+n}`}>
             <AiOutlineWhatsApp></AiOutlineWhatsApp>
        </a>
        <div className="flex flex-col gap-2 items-end">
          <h1 className="font-bold text-lg">{props.name}</h1>
          <div className="flex flex-row gap-1 text-white">
            <h3 className="p-1 rounded-lg bg-gray-900">{props.nationality}</h3>
            <h3 className="p-1 rounded-lg bg-gray-900">{props.work}</h3>
          </div>
          
          <Link
            className="p-1 rounded-lg bg-blue-600 text-white font-bold"
            href={`/secbtn/${props.id}`}>
            <button className="p-1 rounded-lg bg-blue-600 text-white font-bold">
              المزيد من التفاصيل
            </button>
          </Link>
          
        </div>
        <div className=" overflow-hidden flex ml-2 items-center">
          <img
            src={props.url}
            className="rounded-r-lg ml-2 "
            width={85}
            height={85}
          ></img>
        </div>
        
      </div>
    </>
  );
};
