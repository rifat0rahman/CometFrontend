import banneruser from "../../../image/banneruser.svg";
import productHunt from "../../../image/productHunt.svg";
import deshboard from "../../../image/deshboard.avif";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="w-full bg-black py-10 md:pt-[100px] ">
      <div className="container mx-auto flex justify-center items-center flex-col gap-5">
        <h1 className="text-center text-2xl sm:text-3xl md:text-[52px] text-white font-[500]">
          Grow Your LinkedIn Audience
          <span className="bg-white text-black mx-2 px-6 rounded-full">
            FAST{" "}
          </span>
        </h1>
        <h3 className="text-white font-bold text-xl my-5 md:text-2xl text-center">
          Stop wasting hours writing LinkedIn content. Leverage AI to grow on
          LinkedIn.
        </h3>
        <button className="p-4 text-md font-[600] flex justify-center items-center gap-3 rounded-full px-7 text-black bg-white hover:bg-blue-500">
          Start for FREE{" "}
          <FaArrowRight className="p-1 rounded-full bg-blue-500 hover:bg-white text-2xl text-white hover:text-blue-500" />
        </button>
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
        <img
          src={deshboard}
          alt="deshboard"
          className="w-[95%] md:w-[90%] border-2 border-gray-600 rounded-xl my-5"
        />
      </div>
    </div>
  );
}
