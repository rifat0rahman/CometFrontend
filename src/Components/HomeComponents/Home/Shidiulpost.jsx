import { FaCheckCircle } from "react-icons/fa";
import schedulphoto from "../../../image/schedulphoto.svg";

export default function Shidiulpost() {
  return (
    <div className="container bg-white grid grid-cols-1 md:grid-cols-2 my-14 gap-5 mx-auto px-4 py-8">
      <div className="w-full rounded-md flex justify-center items-center">
        <img src={schedulphoto} alt="" className="max-w-full max-h-[500px]" />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className=" w-full py-6">
          <h2 className="text-3xl font-bold mb-4">
            Schedule posts and carousels in 1-click
          </h2>
          <p className="text-gray-600 mb-6">
            Don’t waste time logging into LinkedIn every day to post your
            content. Schedule and manage all your content on Dottypost.
          </p>
          <ul className="mb-6 space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Schedule posts in advance</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Schedule posts with text, images and carousels</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Advanced scheduling options to boost your performance</span>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Start for FREE
          </button>
        </div>
      </div>
    </div>
  );
}
