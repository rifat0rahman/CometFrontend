import { CiSquareRemove } from "react-icons/ci";
import TabsComponent from "./TabsComponent";

export default function SelectTemplete({ callSelectoption, removecallSelect }) {
  return (
    <div className="w-full h-screen z-[1100]  fixed top-0 flex justify-center items-center left-0 bg-[rgba(0,0,0,0.7)]">
      <div className="w-full sm:w-[600px] overflow-y-auto p-2 md:w-[800px] lg:w-[1000px] bg-white h-full sm:h-[90%] rounded-md ">
        <div className="w-full p-2 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold">Select a Template</h1>
          <CiSquareRemove
            onClick={() => removecallSelect(!callSelectoption)}
            className="text-xl text-black cursor-pointer"
          />
        </div>
        {/* ----------------------------tab start from here ------------------------------ */}

        <TabsComponent />
      </div>
    </div>
  );
}
