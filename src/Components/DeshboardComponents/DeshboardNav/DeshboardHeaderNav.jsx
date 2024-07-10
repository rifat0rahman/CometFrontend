// import { IoHome, IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import {
  MdGroupWork,
  MdManageAccounts,
  MdOutlinePriceChange,
  MdOutlineSettingsApplications,
} from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export default function DeshboardHeaderNav() {
  return (
    <div className="w-full p-2 bg-gray-200 flex justify-between items-center">
      <TfiWrite className="hidden md:block" />
      <span className="min-w-[20px]"></span>
      <div className="w-full headernav  sm:max-w-[500px] flex justify-around items-center">
        <NavLink
          className={`flex justify-center items-center gap-1`}
          to={`/deshboard_home`}
        >
          <FaHome />
          <span className="sm:block hidden">Home</span>
        </NavLink>
        <NavLink
          className={`flex justify-center items-center gap-1`}
          to={`/setting`}
        >
          <MdOutlineSettingsApplications />
          <span className="sm:block hidden">Setting</span>
        </NavLink>
        <NavLink
          className={`flex justify-center items-center gap-1`}
          to={`/billing`}
        >
          <MdOutlinePriceChange />
          <span className="sm:block hidden">Billing</span>
        </NavLink>
        <NavLink
          className={`flex justify-center items-center gap-1`}
          to={`/account`}
        >
          <MdManageAccounts />
          <span className="sm:block hidden">Account</span>
        </NavLink>
        <ul className="menu -my-2 menu-horizontal px-0">
          <li>
            <details>
              <summary className="text-md bg-gray-300 font-bold ">
                <MdGroupWork />
                <span className="sm:block hidden">DEFAULT</span>
              </summary>
              <ul className="p-2 w-[180px] right-0 z-[1000] border border-blue-500 rounded-md">
                <li className="uppercase rounded-md hover:bg-blue-50">
                  <a>DEFAULT</a>
                </li>
                <li className="uppercase rounded-md hover:bg-blue-50">
                  <a>DEFAULT</a>
                </li>
                <li className="uppercase rounded-md hover:bg-blue-50">
                  <a>DEFAULT</a>
                </li>
                <button className="w-full btn bg-blue-500 hover:bg-blue-400 text-center text-white font-bold mt-1">
                  Add Workspace
                </button>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
