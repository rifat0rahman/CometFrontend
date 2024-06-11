import { Outlet } from "react-router-dom";
import DeshboardNav from "./DeshboardNav/DeshboardNav";

export default function DeshboardRoot() {
  return (
    <div className="w-full relative flex h-screen">
      <DeshboardNav></DeshboardNav>
      <div className="w-[calc(100%-250px)] h-screen">
        <div className="w-full p-1 flex justify-center items-center bg-blue-400 text-white">
          this is simple notice box
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
