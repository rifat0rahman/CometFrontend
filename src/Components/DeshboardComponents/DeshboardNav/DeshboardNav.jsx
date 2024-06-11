import { useState } from "react";
import { AiOutlineControl, AiOutlineCustomerService } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiNotePencilThin, PiPencilLineBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function DeshboardNav() {
  const [createClicked, setCreateClicked] = useState(false);
  const [manageClicked, setManageClicked] = useState(false);
  const [settingClicked, setSettingClicked] = useState(false);

  return (
    <div className="w-[250px] border-r p-3">
      <div className="w-full flex justify-center item-center border-b">
        <h1 className="text-3xl uppercase font-bold pt-2">Web Logo</h1>
      </div>
      <div className="w-full h-[calc(100%-170px)] overflow-y-auto">
        <div className="w-full py-1 border-b flex justify-between items-center">
          <ul className="menu -my-2 menu-horizontal px-0">
            <li>
              <details>
                <summary className="text-xl text-blue-500 font-bold ">
                  DEFAULT
                </summary>
                <ul className="p-2 w-[220px] border border-blue-500 rounded-md">
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
            } my-2 flex-col`}
          >
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
              Topic creation
            </NavLink>
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
              Post creation
            </NavLink>
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
              AI carousel
            </NavLink>
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
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
            className={`w-full ${
              manageClicked ? "flex" : "hidden"
            } my-2 flex-col`}
          >
            <NavLink
              to="/my_content"
              className="w-full hover:bg-blue-50 p-2 px-8 rounded-md"
            >
              My queue
            </NavLink>
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
              Saved content
            </NavLink>
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
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
            className={`w-full ${
              settingClicked ? "flex" : "hidden"
            } my-2 flex-col`}
          >
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
              Workspace
            </NavLink>
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
              Account
            </NavLink>
            <NavLink className="w-full hover:bg-blue-50 p-2 px-8 rounded-md">
              Billing
            </NavLink>
          </div>
        </div>
        {/* -------------------------------support nav items --------------------- */}
        <NavLink className="flex w-full p-1 py-2 hover:bg-blue-50 items-center">
          <AiOutlineCustomerService className="text-2xl mr-2" />
          Support
        </NavLink>
      </div>
    </div>
  );
}
