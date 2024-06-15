import { Link } from "react-router-dom";
import error from "../../../image/404.gif";

export default function ErrorPage() {
  return (
    <div className="w-full min-h-screen flex justify-center overflow-hidden items-center relative">
      <Link
        to={"/"}
        className="flex justify-center animation top-[50%] btn  items-center border bg-slate-500 !text-white absolute"
      >
        <h1 className="font-bold">GO HOME</h1>
      </Link>
      <img src={error} alt="error" className="max-w-[1000px]" />
    </div>
  );
}
