import { Outlet } from "react-router-dom";
import support from "../../image/public.jpeg";
import Navbar from "../DefaultComponents/Navbar/Navbar";
import Footer from "../DefaultComponents/Footer/Footer";

export default function HomeRoot() {
  return (
    <div className="w-full relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div className="w-[250px] cursor-pointer items-center fixed bottom-3 right-3 grid grid-cols-4 gap-4">
        <div className="w-full bg-white col-span-3 p-2 arrow customshadow rounded-md">
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
  );
}
