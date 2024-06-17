import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  //nav item links is here
  const navItems = (
    <>
      <li>
        <NavLink className="font-bold text-white" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/pricing"}>
          Pricing
        </NavLink>
      </li>

      <li>
        <NavLink className="font-bold text-white" to={"/testimonilas"}>
          Testimonials
        </NavLink>
      </li>

      <li>
        <NavLink className="font-bold text-white" to={"/blog"}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/faq"}>
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/affiliate"}>
          Affiliate
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-black border-b border-gray-900">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu HomeNav menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[rgba(0,0,0,0.6)] rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            <h1 className="text-white text-3xl">Web Logo</h1>
          </NavLink>
        </div>
        <div className="w-[35%] md:w-[80%] justify-end">
          <ul className="menu HomeNav menu-horizontal px-1 hidden lg:flex">
            {navItems}
          </ul>
          <Link
            className=" bg-white font-[400] p-2 px-5 rounded-full"
            to={"/my_content"}
          >
            Start for FREE
          </Link>
        </div>
      </div>
    </div>
  );
}
