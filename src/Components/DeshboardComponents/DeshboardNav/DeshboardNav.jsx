import { useState } from "react";
import {
  AiOutlineControl,
  AiOutlineCustomerService,
  AiOutlineRocket,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiNotePencilThin, PiPencilLineBold } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import profile from "../../../image/sample-profile.jpeg";
import { FaList } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";

export default function DeshboardNav() {
  const [createClicked, setCreateClicked] = useState(false);
  const [manageClicked, setManageClicked] = useState(false);
  const [settingClicked, setSettingClicked] = useState(false);
  const [callNav, setCallNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`w-[250px] h-screen absolute ${
        callNav ? "left-0" : "-left-[250px]"
      } md:static z-[1000] bg-white border-r p-3`}
    >
      <button
        onClick={() => setCallNav(!callNav)}
        className={`absolute block md:hidden text-black p-1 rounded-sm text-xl top-2 ${
          callNav ? " right-3" : "-right-7"
        } cursor-pointer`}
      >
        {callNav ? <CiSquareRemove /> : <FaList />}
      </button>

      {/* -----------------------logo content ---------------------------- */}
      <div className="w-full flex justify-center item-center border-b">
        <h1 className="text-3xl uppercase font-bold pt-2">Web Logo</h1>
      </div>
      {/* ---------------------nav link route content --------------------------- */}
      <div className="w-full h-[calc(100%-160px)] pb-5 overflow-x-hidden overflow-y-auto">
        <div className="w-full py-1 border-b flex justify-between items-center">
          <ul className="menu -my-2 menu-horizontal px-0">
            <li>
              <details>
                <summary className="text-xl text-blue-500 font-bold ">
                  DEFAULT
                </summary>
                <ul className="p-2 w-[200px] border border-blue-500 rounded-md">
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
          <span className="w-[35px] h-[35px] flex justify-center items-center bg-blue-500 hover:bg-blue-400 text-white text-xl rounded-full cursor-pointer">
            <PiPencilLineBold />
          </span>
        </div>
        {/* --------------------create nab items ---------------------------- */}
        <div className="max-w-full mb-1 py-2">
          <div
            onClick={() => setCreateClicked(!createClicked)}
            className="w-full flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-blue-50"
          >
            <span className="flex items-center">
              <PiNotePencilThin className="text-2xl mr-2" />
              Create
            </span>
            {createClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div
            className={`w-full ${
              createClicked ? "flex" : "hidden"
            } my-2 deshboardNav flex-col`}
          >
            <NavLink
              to={`/topic_creation`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Topic creation
            </NavLink>
            <NavLink
              to={`/post_creation`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Post creation
            </NavLink>
            <NavLink
              to={`/ai_carousel`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              AI carousel
            </NavLink>
            <NavLink
              to={`/post_inspiration`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Post inspiration
            </NavLink>
          </div>
        </div>
        {/* ----------------------manage nav items -------------------------- */}
        <div className="max-w-full mb-1 py-2">
          <div
            onClick={() => setManageClicked(!manageClicked)}
            className="w-full flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-blue-50"
          >
            <span className="flex items-center">
              <MdOutlineCalendarToday className="text-2xl mr-2" />
              Manage
            </span>
            {manageClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div
            className={`w-full deshboardNav ${
              manageClicked ? "flex" : "hidden"
            } my-2 flex-col`}
          >
            <NavLink
              to="/my_content"
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              My queue
            </NavLink>
            <NavLink
              to={`/save_content`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Saved content
            </NavLink>
            <NavLink
              to={`/auto_pilot`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Auto-pilot
            </NavLink>
          </div>
        </div>
        {/* --------------------------------settinge nav items--------------------- */}
        <div className="max-w-full mb-1 py-2">
          <div
            onClick={() => setSettingClicked(!settingClicked)}
            className="w-full flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-blue-50"
          >
            <span className="flex items-center">
              <AiOutlineControl className="text-2xl mr-2" />
              Settings
            </span>
            {settingClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div
            className={`w-full deshboardNav ${
              settingClicked ? "flex" : "hidden"
            } my-2 flex-col`}
          >
            <NavLink
              to={`/workspace`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Workspace
            </NavLink>
            <NavLink
              to={`/account`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Account
            </NavLink>
            <NavLink
              to={`/billing`}
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              Billing
            </NavLink>
          </div>
        </div>
        {/* -------------------------------support nav items --------------------- */}
        <NavLink
          to={`/support`}
          className="flex w-full p-2 rounded-md hover:bg-blue-50 items-center"
        >
          <AiOutlineCustomerService className="text-2xl mr-2" />
          Support
        </NavLink>
      </div>
      {/* ----------------------------------profile content-------------------------- */}
      <NavLink
        to={"/product_roadmap"}
        className="flex w-full p-2 rounded-md hover:bg-blue-50 items-center"
      >
        <AiOutlineRocket className="text-2xl mr-2" />
        Product Roadmap
      </NavLink>
      <div
        onClick={() => navigate("/account")}
        className="w-full mt-2 cursor-pointer border rounded-md border-gray-300 hover:border-blue-500 p-2 flex justify-start items-center gap-4"
      >
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img src={profile} alt="user PRofile" className="w-full h-full" />
        </div>
        <h1 className="text-xl">Rifat</h1>
      </div>
    </div>
  );
}
