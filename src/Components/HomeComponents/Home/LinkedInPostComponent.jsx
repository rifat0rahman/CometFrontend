import { FaCheckCircle } from "react-icons/fa";
import linkedinpostComponent from "../../../image/linkedinpostComponent.svg";

export default function LinkedInPostComponent() {
  return (
    <div className="container bg-white grid grid-cols-1 md:grid-cols-2 my-14 gap-5 mx-auto px-4 py-8">
      <div className="w-full flex justify-center items-center">
        <div className=" w-full py-6">
          <h2 className="text-3xl font-bold mb-4">
            Create appealing LinkedIn posts that get results
          </h2>
          <p className="text-gray-600 mb-6">
            Dottypost is designed to help you to create personalized, and
            appealing content so you get attention from your audience
          </p>
          <ul className="mb-6 space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>Create LinkedIn posts that your audience love to read</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>
                Utilize Topics to create visually appealing LinkedIn posts
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>
                Use templates to write posts that resemble human writing
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>
                Use existing blogs to create industry specific LinkedIn posts
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-blue-600 mr-2 mt-1" />
              <span>
                Leverage Youtube video or shorts to create LinkedIn posts
              </span>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-7 py-2 rounded-full hover:bg-blue-700">
            Start for FREE
          </button>
        </div>
      </div>
      <div className="w-full rounded-md flex justify-center items-center">
        <img
          src={linkedinpostComponent}
          alt="LinkedIn Post"
          className="max-w-full max-h-[500px]"
        />
      </div>
    </div>
  );
}
