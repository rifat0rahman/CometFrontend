import { FaArrowAltCircleRight } from "react-icons/fa";
import blogCardImage from "../../../image/blogCard.avif";

export default function BlogCard() {
  return (
    <div className="w-full rounded-md border shadow-md p-3 flex flex-col gap-5">
      <div className="w-full flex justify-center items-center rounded-md overflow-hidden h-[180px]">
        <img src={blogCardImage} className="h-full w-full" alt="blog image" />
      </div>
      <h3 className="text-2xl font-medium mb-5">
        How to Secure Your Dream Client on LinkedIn
      </h3>
      <button className="w-full p-4 bg-blue-600 text-xl rounded-md text-white flex justify-center items-center gap-4">
        Read More{" "}
        <FaArrowAltCircleRight className="text-blue-500 text-4xl bg-white rounded-full" />
      </button>
    </div>
  );
}
