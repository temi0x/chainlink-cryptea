import {
  BiHomeAlt,
  BiPaperPlane,
  BiCreditCard,
  BiLogOut,
  // BiSearch,
  BiBell,
} from "react-icons/bi";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'; 
import { RiSettingsLine } from "react-icons/ri";
import logo1 from "../../assets/img/cryptea.png";
import logo from "../../assets/img/cryptea1.PNG";
import "../../assets/styles/dash.css";
import { Avatar } from "@mui/material";
import DashHome from "./home";
import { NavLink, 
        useLocation 
      } from "react-router-dom";
import { useState } from 'react';

const Dash = () => {

  const { pathname } = useLocation();

  const [isOpen, close] = useState(false);

  const [isOpen3, close3] = useState(false);

  const toggle = () => {

    close(!isOpen);

    setTimeout(() => {
        close3(!isOpen3);
    }, 900)

  }

  const active = "border-l-[3px] border-l-[#F57059] text-[#F57059]";
  return (
    <div className="h-full dash w-full bg-[#F9FAFF] flex">
      <div
        className={`sidebar transition-all z-[100] delay-500 ${
          isOpen ? "min-w-[250px] dsm:absolute  w-[250px]" : `w-[50px]  min-w-[50px] ${isOpen3 ? 'dsm:absolute' : 'relative'}`
        } bg-white border-solid border-r-[1px] border-r-[#E3E3E3] h-[inherit]`}
      >
        <div
          className={`w-full ${
            isOpen ? "py-[1.6rem]" : "py-[1rem]"
          } border-solid innerSide border-b-[1px] flex justify-center transition-all delay-500 items-center relative`}
        >
          <NavLink to="/" className="flex items-center justify-center">
            <img
              src={logo}
              alt="cryptea"
              width={isOpen ? 22 : 40}
              className={`mr-[5px] min-w-[${
                isOpen ? 22 : 40
              }px] transition-all delay-500`}
            />{" "}
            <img
              src={logo1}
              className={isOpen3 ? "" : "transition-all delay-500 hidden"}
              alt="cryptea"
            />
          </NavLink>
          {isOpen3 ? (
            <IoIosArrowDropleftCircle
              onClick={toggle}
              className={`transition-all cursor-pointer delay-500 text-[#F57059] absolute right-[-21px] m-auto z-50 top-0 bottom-0`}
              size={30}
            />
          ) : (
            <IoIosArrowDroprightCircle
              onClick={toggle}
              className={`transition-all cursor-pointer delay-500 text-[#F57059] absolute right-[-21px] m-auto z-50 top-0 bottom-0`}
              size={30}
            />
          )}
        </div>

        <div
          className={`flex innerSide transition-all delay-500 flex-col py-3 ${
            isOpen ? "px-[27px]" : "px-[1px]"
          } justify-center`}
        >
          <div
            className={`${
              isOpen3 ? "pb-9" : "pb-4"
            } mb-5 border-b-[#E3E3E3] border-b-[1px]`}
          >
            <div
              className={`rounded-[4px] overflow-hidden flex-nowrap transition-all delay-500 hover:border-l-[#F57059] hover:text-[#F57059] hover:bg-[#F5F8FE] border-solid ${
                pathname === "/dashboard" ? active : ""
              } transition-all delay-500 bg-[#F5F8FE] py-[9px]`}
            >
              <NavLink
                to="/dashboard"
                className="text-inherit flex items-center text-[14px]"
              >
                <BiHomeAlt
                  size={isOpen3 ? 16.5 : 21}
                  className={`text-inherit transition-all delay-500 ${
                    isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                  } mx-[15px]`}
                />{" "}
                {isOpen3 ? "Dashboard" : ""}
              </NavLink>
            </div>
          </div>

          <div
            className={`rounded-[4px] overflow-hidden flex-nowrap  my-1 ${
              pathname.indexOf("") !== -1 ? active : ""
            } border-solid hover:border-l-[3px] border-l-transparent text-[#A9A9A9] hover:border-l-[#F57059] hover:text-[#F57059] hover:bg-[#F5F8FE]  transition-all delay-500 py-[9px]`}
          >
            <NavLink
              to="/dashboard"
              className="text-inherit flex items-center text-[14px]"
            >
              <BiPaperPlane
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500 ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[15px]`}
              />{" "}
              {isOpen3 ? "Your Pages" : ""}
            </NavLink>
          </div>

          <div
            className={`rounded-[4px] overflow-hidden flex-nowrap my-1 border-solid hover:border-l-[3px] hover:border-l-[#F57059] border-l-transparent text-[#A9A9A9] hover:text-[#F57059] hover:bg-[#F5F8FE] transition-all delay-500 py-[9px] ${
              pathname.indexOf("") !== -1 ? active : ""
            }`}
          >
            <NavLink
              to="/dashboard"
              className="text-inherit flex items-center text-[14px]"
            >
              <BiCreditCard
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500  ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[15px]`}
              />{" "}
              {isOpen3 ? "Payment Links" : ""}
            </NavLink>
          </div>

          <div
            className={`rounded-[4px] overflow-hidden flex-nowrap my-1 border-solid hover:border-l-[3px] hover:border-l-[#F57059] hover:text-[#F57059] border-l-transparent text-[#A9A9A9] hover:bg-[#F5F8FE] transition-all delay-500 py-[9px] ${
              pathname.indexOf("") !== -1 ? active : ""
            }`}
          >
            <NavLink
              to="/dashboard"
              className="text-inherit flex items-center text-[14px]"
            >
              <RiSettingsLine
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500  ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[15px]`}
              />{" "}
              {isOpen3 ? "Settings" : ""}
            </NavLink>
          </div>

          <div className="rounded-[4px] overflow-hidden flex-nowrap my-1 border-solid hover:border-l-[3px] hover:border-l-[#F57059] border-l-transparent text-[#A9A9A9] hover:text-[#F57059] hover:bg-[#F5F8FE] transition-all delay-500 py-[9px]">
            <NavLink
              to="dashboard/logout"
              className="text-inherit flex items-center text-[14px]"
            >
              <BiLogOut
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500 ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[15px]`}
              />{" "}
              {isOpen3 ? "Log Out" : ""}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="body w-full h-full">
        <div className="flex px-[20px] py-[13px] justify-between items-center border-solid border-b-[1px] 3md:border-b-transparent bg-white border-b-[#E3E3E3]">
          <div className="">
            <h1 className="font-bold">Welcome Zarror!☕</h1>
            <span>Hope you are healthy and happy today..</span>
          </div>
          <div className="flex items-center">
            {/* <form
              className="relative min-w-[260px] mr-[10px] flex items-center"
              method="get"
              action=""
            >
              <BiSearch
                className="absolute left-[9px]"
                color="#626262"
                size={22}
              />
              <input
                className="rounded-lg border p-2 w-full pl-[35px] focus:outline-none focus:shadow-outline-blue text-[#A9A9A9] placeholder-[#A9A9A9]"
                placeholder="Search..."
                type="search"
                name="username"
              />
            </form> */}

            <div className="h-full w-[20px] mx-2">
              <BiBell size={23} className="cursor-pointer" color="#000" />
            </div>

              <Avatar sx={{ bgcolor: "red" }} alt="Zarror">
                Z
              </Avatar>
          </div>
        </div>

        <DashHome />
      </div>
    </div>
  );
};

export default Dash;
