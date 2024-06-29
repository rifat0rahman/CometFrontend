import { FaArrowAltCircleRight } from "react-icons/fa";

export default function JoinLeague() {
  return (
    <div className="w-full px-2 py-10 flex justify-center">
      <div className="container mx-auto bg-gray-100 border shadow-lg rounded-lg py-10 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl my-4">
          Join the league of Founders, Creators and Brand builders!
        </h1>
        <p className="mb-6 text-xl">Start your journey today</p>
        <div className="w-full flex justify-center items-center">
          <button className="flex justify-center items-center gap-2 text-2xl font-bold  border-[2px] p-3 px-5 border-blue-500 rounded-lg">
            Start for FREE{" "}
            <FaArrowAltCircleRight className="text-blue-500 text-4xl border-[3px] border-blue-200 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
