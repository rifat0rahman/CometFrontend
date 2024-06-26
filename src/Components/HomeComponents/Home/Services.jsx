import { FaArrowAltCircleRight } from "react-icons/fa";
import user from "../../../image/servicesUser.avif";
import info from "../../../image/servicesUser2.avif";
import { SiApple, SiTesla } from "react-icons/si";
import { BsSpotify } from "react-icons/bs";

export default function Services() {
  return (
    <div className="container mx-auto py-10 px-2">
      <h1 className="text-4xl font-bold text-center my-10">
        Wait that`s not it, there`s more…
      </h1>
      <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="w-full flex justify-center items-center">
          <div className="w-full h-full bg-gray-200 rounded-lg p-4 ">
            <h3 className="text-3xl mt-5 text-black font-bold">
              Multiple LinkedIn
            </h3>
            <p className="text-gray-800 mt-5">
              Manage multiple LinkedIn accounts —all on Dottypost
            </p>
            <div className="w-full">
              <img src={user} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full h-full bg-gray-200 rounded-lg p-4 ">
            <h3 className="text-3xl mt-5 text-black font-bold">Company Page</h3>
            <p className="text-gray-800 mt-5">
              Manage and write content for your company pages
            </p>
            <div className="w-full flex flex-col gap-3 px-3 pt-6 mt-10">
              <div className="w-full flex items-center gap-5 rounded-md p-3 bg-white">
                <SiApple className="text-3xl text-gray-700" />
                <span className="text-xl text-gray-600 font-medium">Apple</span>
              </div>
              <div className="w-full flex items-center gap-5 rounded-md p-3 bg-white">
                <BsSpotify className="text-3xl text-green-500" />
                <span className="text-xl text-gray-600 font-medium">
                  Spotify
                </span>
              </div>
              <div className="w-full flex items-center gap-5 rounded-md p-3 bg-white">
                <SiTesla className="text-2xl text-white p-1 bg-red-700 rounded-full" />
                <span className="text-xl text-gray-600 font-medium">Tesla</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full h-full bg-gray-200 rounded-lg p-4 ">
            <h3 className="text-3xl mt-5 text-black font-bold">
              Team Collaboration
            </h3>
            <p className="text-gray-800 mt-5">
              Add your team members or clients to work in real-time
            </p>
            <div className="w-full">
              <img src={info} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="flex justify-center items-center gap-2 text-2xl font-bold  border-[2px] p-3 px-5 border-blue-500 rounded-lg">
          Start for FREE{" "}
          <FaArrowAltCircleRight className="text-blue-500 text-4xl border-[3px] border-blue-200 rounded-full" />
        </button>
      </div>
    </div>
  );
}
