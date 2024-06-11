import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="w-full flex-col h-full flex justify-center items-center">
      ErrorPage
      <Link to="/">Got Home</Link>
    </div>
  );
}
