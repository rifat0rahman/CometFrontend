import { FcGoogle } from "react-icons/fc";

export default function GoogleAuth() {
  return (
    <div className="border-2 rounded-md p-1 cursor-pointer mt-7 px-3  flex border-gray-300 hover:bg-gray-300 justify-center items-center">
      <FcGoogle className="text-4xl mr-4 " />
      <span className="text-xl text-gray-500 font-medium">
        Sign in with Google
      </span>
    </div>
  );
}
