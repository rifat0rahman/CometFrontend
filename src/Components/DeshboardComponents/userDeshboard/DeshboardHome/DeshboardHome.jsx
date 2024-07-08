import { FaLinkedin } from "react-icons/fa";
import image from "../../../../image/deshboardHomeIcon.svg";

export default function DeshboardHome() {
  return (
    <div className="w-full">
      <div className="w-full p-3 border-b">
        <h4 className="text-xl font-medium text-gray-600">Home</h4>
      </div>
      <div className="max-w-full p-5 m-2 md:m-4 flex-col gap-3 rounded-md border flex justify-center items-center">
        <img src={image} alt="png" className="w-[150px]" />
        <h3 className="text-xl">No posts scheduled yet!</h3>
        <small>Connect your LinkedIn to schedule posts</small>
        <button className="flex justify-center items-center text-sm px-3 p-1 rounded-md gap-2 text-white bg-gray-900 hover:bg-gray-700 shadow-md">
          <FaLinkedin />
          Connect LinkedIn
        </button>
      </div>
    </div>
  );
}
