import { MdOutlineAutoAwesome } from "react-icons/md";
import { PiNotePencilThin } from "react-icons/pi";

export default function GenerateIdeas() {
  return (
    <div className="w-full">
      <div className="w-full p-3 border-b">
        <h4 className="text-xl font-medium text-gray-600">
          Post Ideas Generator
        </h4>
      </div>

      {/* ----------------- main page start from here ----------------  */}
      <div className="w-full flex flex-col gap-3 p-3">
        <div className="w-full p-3 rounded-md border flex flex-col sm:flex-row justify-between gap-3 items-center">
          <div className="w-full flex justify-start items-start flex-col sm:w-auto">
            <div className="flex justify-center items-center gap-3">
              <PiNotePencilThin className="text-xl" />
              <h4 className="font-bold">Post ideas based on your persona</h4>
            </div>
            <p className="mt-2 ml-8">
              Generate personalized LinkedIn post ideas based on your profile
              and interests
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <button className="p-1 px-2 flex justify-center items-center gap-1 bg-gray-500 rounded-md text-white ">
              <MdOutlineAutoAwesome />
              Generate Ideas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
