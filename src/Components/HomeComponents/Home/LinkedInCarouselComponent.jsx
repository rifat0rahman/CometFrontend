import { FaCheckCircle } from "react-icons/fa";
import caroselComponent from "../../../image/caroselcomponentphoto.svg";

export default function LinkedInCarouselComponent() {
  return (
    <div className="container bg-white grid grid-cols-1 md:grid-cols-2 my-14 gap-5 mx-auto px-4 py-8">
      <div className="w-full rounded-md flex justify-center items-center">
        <img
          src={caroselComponent}
          alt=""
          className="max-w-full max-h-[500px]"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className=" w-full py-6">
          <h2 className="text-3xl font-bold mb-4">
            Create beautiful carousel in minutes
          </h2>
          <p className="text-gray-600 mb-6">
            Create eye-catching LinkedIn carousels using AI. Review it and post
            it on LinkedIn — everything from Dottypost
          </p>
          <ul className="mb-6 space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Create carousels from Topic, Blog and YouTube</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Utilize ready-to-use templates</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Customize as per your choice</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Download Carousels</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Share or schedule carousels</span>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-7 py-2 rounded-full hover:bg-blue-700">
            Start for FREE
          </button>
        </div>
      </div>
    </div>
  );
}
