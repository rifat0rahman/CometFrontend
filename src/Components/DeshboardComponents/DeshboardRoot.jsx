import { Outlet } from "react-router-dom";
import DeshboardNav from "./DeshboardNav/DeshboardNav";
import DeshboardHeaderNav from "./DeshboardNav/DeshboardHeaderNav";

export default function DeshboardRoot() {
  return (
    <div className="w-full relative flex h-screen">
      <DeshboardNav></DeshboardNav>
      <div className="w-full md:w-[calc(100%-250px)] overflow-y-auto relative h-screen">
        <DeshboardHeaderNav></DeshboardHeaderNav>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
