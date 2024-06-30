import { FaCheck } from "react-icons/fa6";

export default function TeamPlan() {
  return (
    <div className="bg-white p-4 border rounded-xl mx-auto shadow-md w-[1000px] m-2 my-5">
      <h2 className="text-xl text-gray-500">Team</h2>
      <p className="text-4xl font-medium mb-3">
        $99<span className="text-sm text-gray-500">/month</span>
      </p>
      <hr />
      <ul className="my-8 text-gray-500 flex flex-col gap-5 ">
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          Everything in Pro plus
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          10 Workspaces
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          10 Users (Team-mates/Clients)
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          10 LinkedIn personal accounts
        </li>
        <li className="flex items-center">
          <FaCheck className=" mr-2" />
          10 LinkedIn company pages
        </li>
      </ul>
      <button className="mt-4 w-full rounded-full bg-black text-white py-2 px-4 ">
        Start for FREE
      </button>
    </div>
  );
}
