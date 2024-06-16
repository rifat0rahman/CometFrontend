import { FaCheckCircle } from "react-icons/fa";
import inspirations from "../../../image/inspirations.svg";

export default function LinkedInInspirationComponent() {
  return (
    <div className="container bg-white grid grid-cols-1 md:grid-cols-2 my-14 gap-5 mx-auto px-4 py-8">
      <div className="w-full flex justify-center items-center">
        <div className=" w-full py-6">
          <h2 className="text-3xl font-bold mb-4">
            Leverage 10,000+ posts for content inspiration
          </h2>
          <p className="text-gray-600 mb-6">
            Get ideas for your next LinkedIn post from our content library
          </p>
          <ul className="mb-6 space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Create LinkedIn posts from viral posts</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Use AI on existing LinkedIn posts</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Review post and share or schedule on LinkedIn</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Explore industry-specific LinkedIn posts</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Save posts from viral library</span>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Start for FREE
          </button>
        </div>
      </div>
      <div className="w-full rounded-md flex justify-center items-center">
        <img src={inspirations} alt="" className="max-w-full max-h-[500px]" />
      </div>
    </div>
  );
}
