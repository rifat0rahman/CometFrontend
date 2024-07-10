import { IoIosSearch } from "react-icons/io";
import InspirationButtons from "./InspirationButtons";

export default function PostInspiration() {
  return (
    <div className="w-full">
      <div className="w-full p-3 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h4 className="text-xl font-medium text-gray-600">Post Inspirations</h4>
        <form className="relative rounded-md overflow-hidden w-full sm:w-[350px] mt-5 sm:mt-0">
          <input
            type="text"
            placeholder="search post bu keywords"
            className="p-1 pl-3 pr-10 border rounded-md w-full sm:w-[350px] outline-0"
          />
          <button
            type="submit"
            className="absolute w-[40px] h-full flex justify-center items-center top-0 right-0 text-xl"
          >
            <IoIosSearch />
          </button>
        </form>
      </div>
      {/* ---------------------- main top button body ---------------------  */}
      <InspirationButtons></InspirationButtons>
    </div>
  );
}
