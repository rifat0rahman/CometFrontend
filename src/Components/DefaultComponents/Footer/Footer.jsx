import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import productImage from "../../../image/productHunt.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-black border-t py-10 px-2 border-gray-900">
      <div className="container mx-auto grid grid-cols-1 border-b border-gray-900 sm:grid-cols-3 md:grid-cols-5">
        <div className="w-full">
          <h1 className="text-2xl text-white font-bold">Web Logo</h1>
          <p className="text-white text-[18px] my-4">
            The #1 AI Tool for LinkedIn.
          </p>
          <div className="w-full flex mb-3 items-center gap-3">
            <FaLinkedin className="text-3xl text-white" />
            <FaXTwitter className="text-3xl text-white" />
          </div>
          <Link>
            <img src={productImage} alt="product image" className="h-[50px]" />
          </Link>
          <p className="text-white text-[18px] my-4">support@dottypost.com</p>
        </div>
        <span></span>
        <div className="w-full flex flex-col gap-3">
          <Link to={`/`} className="text-white">
            Pricing
          </Link>
          <Link to={`/`} className="text-white">
            FAQ
          </Link>
          <Link to={`/`} className="text-white">
            Testimonials
          </Link>
          <Link to={`/`} className="text-white">
            Blog
          </Link>
          <Link to={`/`} className="text-white">
            Affiliate
          </Link>
        </div>
        <span></span>
        <div className="w-full flex flex-col gap-3">
          <Link to={`/`} className="text-white">
            Privacy Policy
          </Link>
          <Link to={`/`} className="text-white">
            Terms & Conditions
          </Link>
          <Link to={`/`} className="text-white">
            Roadmap
          </Link>
          <Link to={`/`} className="text-white">
            Changelog
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-5">
        <p className="text-white text-[18px] text-center">
          Made with 💙 from expertise around the world.{" "}
        </p>
        <p className="text-gray-400 text-[18px] text-center">
          © 2024 DottPost. All rights reserved.
        </p>
      </div>
    </div>
  );
}
