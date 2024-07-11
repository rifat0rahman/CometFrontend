import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { PiPencilLineBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Languages from "./Languages";

export default function Setting() {
  return (
    <div className="w-full">
      <div className="w-full p-3 border-b flex justify-between items-center">
        <h4 className="text-xl font-medium text-gray-600">Settings</h4>
        <button className="flex justify-center items-center gap-3 px-4 p-2 rounded bg-gray-200 hover:bg-gray-300">
          <HiOutlineUsers />
          invite users
        </button>
      </div>
      {/* ------------------- main contant -----------  */}
      <div className="w-full flex flex-col gap-3 p-3">
        {/* -------------------- first option --------------  */}
        <div className="w-full p-3 rounded-md border flex flex-col sm:flex-row justify-between gap-3 items-center">
          <div className="w-full flex justify-start items-start flex-col sm:w-auto">
            <div className="flex justify-center items-center gap-3">
              <PiPencilLineBold className="p-1 bg-black text-white rounded text-xl" />
              <h4 className="font-bold">Select language for LinkedIn posts</h4>
            </div>
            <p className="mt-2 ml-8">
              Choose your preferred language for LinkedIn posts
            </p>
          </div>
          <Languages></Languages>
        </div>

        {/* -------------------- secend option --------------  */}
        <div className="w-full p-3 rounded-md border flex flex-col sm:flex-row justify-between gap-3 items-center">
          <div className="w-full flex justify-start items-start flex-col sm:w-auto">
            <div className="flex justify-center items-center gap-3">
              <FaLinkedinIn className="p-1 bg-black text-white rounded text-xl" />
              <h4 className="font-bold">Connect your LinkedIn account</h4>
            </div>
            <p className="mt-2 ml-8">
              Link your LinkedIn accounts and company pages so you can schedule
              posts
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <button className="flex justify-center w-full sm:w-[200px] items-center text-sm px-3 p-2 rounded-md gap-2 text-white bg-gray-900 hover:bg-gray-700 shadow-md">
              <FaLinkedin />
              Connect LinkedIn
            </button>
          </div>
        </div>

        {/* -------------------- secend option --------------  */}
        <div className="w-full p-3 rounded-md border flex flex-col gap-4 mt-8">
          <div className="w-full flex justify-start items-start flex-col sm:w-auto">
            <h4 className="font-bold">Archive this Workspace</h4>
            <p className=" text-gray-500">Remove this workspace</p>
            <Link to={`/setting`} className="text-gray-500 underline mt-3">
              Archive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
