import Nav from "../../components/Nav"
import Link from "next/link";
export default () => {
  return (
    <>
    <Nav></Nav>
      <div className="flex flex-col justify-center items-center mt-24 mb-5 bg-white  h-screen">
        <h1 className="text-4xl font-bold text-black">اختر دولة</h1>
        <Link href="/firstbtn/india">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold hover:bg-blue-600 px-16 duration-500 hover:text-white">
            الهند
          </button>
        </Link>
        <Link href="/firstbtn/phippines">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold hover:bg-blue-600 px-16 duration-500 hover:text-white">
            الفلبين
          </button>
        </Link>
        <Link href="/firstbtn/ethiopia">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold hover:bg-blue-600 px-16 duration-500 hover:text-white">
            اثيوبيا
          </button>
        </Link>
        <Link href="/firstbtn/kenya">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold hover:bg-blue-600 px-16 duration-500 hover:text-white">
          كينيا
          </button>
        </Link>
        <Link href="/firstbtn/SriLanka">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold hover:bg-blue-600 px-16 duration-500 hover:text-white">
          سريلانكا
          </button>
        </Link>
      </div>
    </>
  );
};
