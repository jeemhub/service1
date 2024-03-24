import Nav from "../../components/Nav"
import Link from "next/link";
export default () => {
  return (
    <>
    <Nav></Nav>
      <div className="flex flex-col justify-center items-center mt-24 mb-5 bg-gray-900 h-screen">
        <h1 className="text-4xl font-bold text-white">اختر دولة</h1>
        <Link href="/firstbtn/india">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold">
            الهند
          </button>
        </Link>
        <Link href="/firstbtn/phippines">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold">
            الفلبين
          </button>
        </Link>
        <Link href="/firstbtn/ethiopia">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold">
            اثيوبيا
          </button>
        </Link>
        <Link href="/firstbtn/indonosia">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold">
          اندونيسيا
          </button>
        </Link>
        <Link href="/firstbtn/SriLanka">
          <button className="bg-white p-2 text-xl mt-5 px-10 rounded-md text-gray-900 font-bold">
          سريلانكا
          </button>
        </Link>
      </div>
    </>
  );
};
