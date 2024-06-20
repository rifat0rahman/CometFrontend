import { Link, Outlet } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import GoogleAuth from "./GoogleAuth";
import banneruser from "../../../image/banneruser.svg";
import productHunt from "../../../image/productHunt.svg";

export default function AuthRoot() {
  return (
    <div className="w-full min-h-screen relative bg-black">
      <div className="container mx-auto p-3">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold text-white">Web Logo</h1>
        </Link>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-8 py-7">
        <h1 className="text-2xl md:text-6xl text-center text-white font-bold">
          Leverage AI to grow on LinkedIn
        </h1>
        <TypeAnimation
          sequence={[
            "Create  butiful linked in carousel",
            1000,
            "Post ganerat and post by one cluck",
            1000,
            "Ganerat wonderful any kind of idea",
            1000,
            "We produce Best opterchunity for every user",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-4xl text-center font-bold text-white"
          repeat={Infinity}
        />
        <GoogleAuth></GoogleAuth>
        <div className="flex justify-center -mt-7 items-center">
          <span className="text-white font-bold ">OR</span>
        </div>
        <div className="w-full flex px-2 -mt-6 justify-center items-center">
          <Outlet></Outlet>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 pb-10">
          <p className="text-center text-white mt-10">
            Trusted by 3,800+ LinkedIn experts, founders, marketers and
            professionals
          </p>
          <img src={banneruser} alt="users photo" className="h-[60px] my-5" />
          <img
            src={productHunt}
            alt="productHunt"
            className="h-[60px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
