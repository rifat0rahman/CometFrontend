import { FaArrowAltCircleRight } from "react-icons/fa";
import blog1 from "../../../image/blog1.avif";
import blog2 from "../../../image/blog2.avif";

export default function BlogComponent() {
  return (
    <div className="container mx-auto py-10 px-2">
      <h1 className="text-4xl font-bold text-center my-10">
        Our Featured Blogs
      </h1>
      <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="w-full flex justify-center items-center">
          <div className="w-full border-2 p-5 rounded-md">
            <div className="w-full h-[200px] overflow-hidden rounded-md flex justify-center items-center">
              <img src={blog1} alt="" className="min-h-full w-full" />
            </div>
            <div className="w-full h-[250px] overflow-hidden">
              <h1 className="text-3xl my-4 text-black">
                6-Month LinkedIn Content Calendar for Consistent Posting
              </h1>
              <p className="text-xl text-gray-500">
                Elevate your LinkedIn presence with our expertly crafted
                "6-Month LinkedIn Content Calendar for Consistent Posting." This
                guide ensures you remain active, engaged, and ahead in the
                professional networking game.
              </p>
            </div>
            <button className="w-full p-4 bg-blue-600 text-xl rounded-md text-white flex justify-center items-center gap-4">
              Read More{" "}
              <FaArrowAltCircleRight className="text-blue-500 text-4xl bg-white rounded-full" />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full border-2 p-5 rounded-md">
            <div className="w-full h-[200px] overflow-hidden rounded-md flex justify-center items-center">
              <img src={blog2} alt="" className=" min-h-full w-full" />
            </div>
            <div className="w-full h-[250px] overflow-hidden">
              <h1 className="text-3xl my-4 text-black">
                20 Best Practices to Master LinkedIn Posts
              </h1>
              <p className="text-xl text-gray-500">
                Discover the power of LinkedIn with 20 Best Practices to Master
                LinkedIn Posts. Elevate your professional presence, expand your
                network, and grab new opportunities for growth and success on
                the platform.
              </p>
            </div>
            <button className="w-full p-4 bg-blue-600 text-xl rounded-md text-white flex justify-center items-center gap-4">
              Read More{" "}
              <FaArrowAltCircleRight className="text-blue-500 text-4xl bg-white rounded-full" />
            </button>
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
