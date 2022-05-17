import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/cryptea logo.svg";

let buttonText = "";

function Nav() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    logout,
    account,
    enableWeb3,
    isWeb3Enabled,
  } = useMoralis();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Logged in user:", user.get("ethAddress"));
    } else {
      console.log("Not logged in");
    }

    if (isAuthenticated) {
      let address = user.get("ethAddress");
      console.log("Here ");
      buttonText =
        address.substring(0, 5) +
        "...." +
        address.substring(address.length - 5, address.length);
    } else {
      buttonText = "Connect Wallet";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleLogout = () => {
    authenticate(false);
  };

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Welcome to Cryptea" })
        .then(function (user) {
          window.location.href = "/signup";
          // console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
          window.location.href = "/";
        });
    } else {
      window.location.href = "/signup";
    }
  };

  return (
    <div className="nav relative ml-[30px] 2sm:ml-1 z-10">
      <div className="flex flex-row justify-between items-center px-14 pt-5 2sm:px-7">
        <NavLink to="/" className="flex items-center justify-center">
          <img
            src={logo}
            alt="cryptea"
            width={30}
            className="mr-[5px] min-w-[30px]"
          />
          <span className="text-black text-2xl font-bold">CRYPTEA</span>
        </NavLink>
        {/* <Link to="/" className="text-black text-2xl font-bold">
          CRYPTEA
        </Link> */}
        <div className="text-black flex flex-row font-medium text-lg">
          <Link to="about" className="text-black pr-4">
            About
          </Link>
          <div className="text-black pl-4">Blog</div>
        </div>
        <div className="right mmd:hidden">
          <button
            onClick={login}
            className="hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-4"
          >
            {buttonText}
          </button>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="ml-2 hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-4"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
