import { FaCheck } from "react-icons/fa6";

export default function ProPlan() {
  return (
    <div className="bg-black text-white overflow-hidden relative p-4 border rounded-xl mx-auto shadow-md w-[1000px] m-2 my-5">
      <span className=" absolute top-0 right-0 p-2 px-5 rounded-bl-md bg-blue-600 text-white">
        most popular
      </span>
      <h2 className="text-xl text-gray-300">Pro</h2>
      <p className="text-4xl font-medium mb-3">
        $29<span className="text-sm text-gray-300">/month</span>
      </p>
      <hr />
      <ul className="my-8 text-gray-300 flex flex-col gap-5">
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Everything in Starter plus
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Post creation from Shorts
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Post creation from YouTube
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Post creation from Blog
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Carousel creation from Shorts
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Carousel creation from YouTube
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Carousel creation from Blog
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          10,000+ posts for inspiration
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Content curation with AI
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Content management
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Auto plug comment
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />2 Users
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Unlimited AI Credits
        </li>
      </ul>
      <button className="mt-4 bg-white text-black py-2 px-4 w-full rounded-full">
        Start for FREE
      </button>
    </div>
  );
}
