import { Outlet } from "react-router-dom";
import Navbar from "../DefaultComponents/Navbar/Navbar";
import Footer from "../DefaultComponents/Footer/Footer";

export default function HomeRoot() {
  return (
    <div className="w-full relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
