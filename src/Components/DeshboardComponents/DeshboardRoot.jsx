import { Outlet } from "react-router-dom";
import DeshboardNav from "./DeshboardNav/DeshboardNav";
import support from "../../image/public.jpeg";

export default function DeshboardRoot() {
  return (
    <div className="w-full relative flex h-screen">
      <DeshboardNav></DeshboardNav>
      <div className="w-full md:w-[calc(100%-250px)] overflow-y-auto relative h-screen">
        <div className="w-full  bg-blue-400  text-white ">
          <p className="text-center">this is simple notice box</p>
        </div>
        <Outlet></Outlet>
        <div className="w-[250px] arrow cursor-pointer items-center fixed bottom-3 right-3 grid grid-cols-4 gap-4">
          <div className="w-full bg-white col-span-3 p-2 customshadow rounded-md">
            <p className="text-black text-md">Hay there!</p>
            <p className="text-gray-800 text-sm">How can i help you?</p>
          </div>
          <img
            src={support}
            alt="public"
            className="w-full border-2 border-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
