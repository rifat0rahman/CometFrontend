import { FaCheck } from "react-icons/fa6";

export default function StarterPlan() {
  return (
    <div className="bg-white p-4 border rounded-xl mx-auto shadow-md w-[1000px] m-2 my-5">
      <h2 className="text-xl text-gray-500">Starter</h2>
      <p className="text-4xl font-medium mb-3">
        $9<span className="text-sm text-gray-500">/month</span>
      </p>
      <hr />
      <ul className="my-8 text-gray-500 flex flex-col gap-5 ">
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Post creation from Topic
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Carousel creation from Topic
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          100+ viral post templates
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          20 carousel templates
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Content in 100+ languages
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          1-click Schedule
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />1 LinkedIn personal account
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />1 LinkedIn company page
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />1 Workspace
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />1 User
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          30 AI Credits
        </li>
      </ul>
      <button className="mt-4 w-full rounded-full bg-black text-white py-2 px-4 ">
        Start for FREE
      </button>
    </div>
  );
}
