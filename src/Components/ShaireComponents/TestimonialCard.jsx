import { FaEye, FaRocket } from "react-icons/fa";
import user1 from "../../image/user1.avif";
import linkidin from "../../image/Linkedin.png";

export default function TestimonialCard() {
  return (
    <div className="min-w-[500px] mx-5 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full"
          src={user1} // Replace with actual image URL
          alt="User Avatar"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Jay Shankarpure</h2>
          <p className="text-gray-500">Founder</p>
        </div>
        <div className="ml-auto">
          <img
            className="w-5 h-5"
            src={linkidin} // Replace with actual logo URL
            alt="Company Logo"
          />
        </div>
      </div>
      <p className="text-gray-700 mb-2">
        Amongst more than 25+ submissions in the{" "}
        <span className="font-semibold">@BubbleIND</span>
      </p>
      <p className="text-gray-700 mb-2">
        Dottypost by <span className="font-semibold">@ankit_saas</span> caught
        my eye <FaEye className="inline ml-1" />
      </p>
      <p className="text-gray-700 mb-4">
        Simple & elegant platform to generate carousels for LinkedIn.
      </p>
      <p className="text-gray-700">
        Keep up the good work <FaRocket className="inline ml-1" />
      </p>
    </div>
  );
}
