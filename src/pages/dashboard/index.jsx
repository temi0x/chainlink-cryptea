import {
  BiHomeAlt,
  BiPaperPlane,
  BiCreditCard,
  BiLogOut,
  BiSearch,
  BiBell,
} from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import logo1 from "../../assets/img/cryptea.png";
import logo from "../../assets/img/cryptea1.PNG";
import "../../assets/styles/dash.css";
import { Avatar } from "web3uikit";
import DashHome from "./home";
import { NavLink, useLocation } from "react-router-dom";
import { useMoralis } from "react-moralis";

const Dash = () => {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
  } else {
    window.location.href = "/";
  }
  const { pathname } = useLocation();

  const active = "border-l-[3px] border-l-[#F57059] text-[#F57059]";
  return (
    <div className="h-full dash w-full bg-[#F9FAFF] flex">
      <div className="sidebar min-w-[250px] bg-white border-solid border-r-[1px] border-r-[#E3E3E3] h-full">
        <div className="w-full py-[1.6rem] border-solid border-b-[1px] flex justify-center items-center">
          <NavLink to="/" className="flex items-center justify-center">
            <img src={logo} alt="cryptea" width={22} className="mr-[5px]" />{" "}
            <img src={logo1} alt="cryptea" />
          </NavLink>
        </div>

        <div className="flex flex-col py-3 px-[27px] justify-center">
          <div className="pb-9 mb-5 border-b-[#E3E3E3] border-b-[1px]">
            <div
              className={`rounded-[4px] hover:border-l-[#F57059] hover:text-[#F57059] hover:bg-[#F5F8FE]  border-solid ${
                pathname === "/dashboard" ? active : ""
              } transition-all delay-500 bg-[#F5F8FE] flex items-center py-[9px]`}
            >
              <BiHomeAlt size={16.5} className="text-inherit mx-[15px]" />

              <NavLink to="/dashboard" className="text-inherit text-[14px]">
                Dashboard
              </NavLink>
            </div>
          </div>

          <div
            className={`rounded-[4px] my-1 ${
              pathname.indexOf("") !== -1 ? active : ""
            } border-solid hover:border-l-[3px] border-l-transparent text-[#A9A9A9] hover:border-l-[#F57059] hover:text-[#F57059] hover:bg-[#F5F8FE] flex items-center transition-all delay-500 py-[9px]`}
          >
            <BiPaperPlane size={16.5} className="text-inherit mx-[15px]" />{" "}
            <NavLink to="/dashboard" className="text-inherit text-[14px]">
              Your Pages
            </NavLink>
          </div>

          <div
            className={`rounded-[4px] my-1 border-solid hover:border-l-[3px] hover:border-l-[#F57059] border-l-transparent text-[#A9A9A9] hover:text-[#F57059] hover:bg-[#F5F8FE] flex items-center transition-all delay-500 py-[9px] ${
              pathname.indexOf("") !== -1 ? active : ""
            }`}
          >
            <BiCreditCard size={16.5} className="text-inherit mx-[15px]" />{" "}
            <NavLink to="/dashboard" className="text-inherit text-[14px]">
              Payment Links
            </NavLink>
          </div>

          <div
            className={`rounded-[4px] my-1 border-solid hover:border-l-[3px] hover:border-l-[#F57059] hover:text-[#F57059] border-l-transparent text-[#A9A9A9] hover:bg-[#F5F8FE] flex items-center transition-all delay-500 py-[9px] ${
              pathname.indexOf("") !== -1 ? active : ""
            }`}
          >
            <RiSettingsLine size={16.5} className="text-inherit mx-[15px]" />{" "}
            <NavLink to="/dashboard" className="text-inherit text-[14px]">
              Settings
            </NavLink>
          </div>

          <div className="rounded-[4px] my-1 border-solid hover:border-l-[3px] hover:border-l-[#F57059] border-l-transparent text-[#A9A9A9] hover:text-[#F57059] hover:bg-[#F5F8FE] flex items-center transition-all delay-500 py-[9px]">
            <BiLogOut size={16.5} className="text-inherit mx-[15px]" />{" "}
            <NavLink to="dashboard/logout" className="text-inherit text-[14px]">
              Log Out
            </NavLink>
          </div>
        </div>
      </div>
      <div className="body w-full h-full">
        <div className="flex px-[20px] py-[13px] justify-between items-center border-solid border-b-[1px] bg-white border-b-[#E3E3E3]">
          <div className="">
            <h1 className="font-bold">Welcome Zarror!☕</h1>
            <span>Hope you are healthy and happy today..</span>
          </div>
          <div className="flex items-center">
            <form
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
            </form>

            <div className="h-full w-[20px] mx-2">
              <BiBell size={23} className="cursor-pointer" color="#000" />
            </div>

            <Avatar
              isRounded
              text="US"
              className="cursor-pointer"
              theme="letters"
            />
          </div>
        </div>

        <DashHome />
      </div>
    </div>
  );
};

export default Dash;
