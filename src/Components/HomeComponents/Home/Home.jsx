import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Link to="/my_content" className="btn w-[150px] bg-blue-600 text-white">
        Go Deshboard
      </Link>
    </div>
  );
}
