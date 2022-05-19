import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useMoralis } from "react-moralis";
import logo from "../../assets/img/cryptea-logo.svg";
function Nav() {
  const { isAuthenticated, user, authenticate, logout } = useMoralis();

  let buttonText = useRef("Connect Wallet");

  useEffect(() => {
    if (isAuthenticated) {
      
      console.log("Logged in user:", user.get("ethAddress"));
    } else {

      console.log("Not logged in");
    }

    if (isAuthenticated) {
      let address = user.get("ethAddress");

      buttonText.current =
        address.substring(0, 5) +
        "...." +
        address.substring(address.length - 5, address.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const logOut = async (redirect = false) => {
    if (isAuthenticated) {
      logout();
      buttonText.current = "Connect Wallet";
    }
  };
 
  const walletConnect = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Welcome to Cryptea" })
        .then(function (user) {

          if (user.get("email") === undefined) {
            window.location.href = "/signup";
          } else {
            if (!user.get("email").length) {
              window.location.href = "/signup";
            }else{
            window.location.href = "/dashboard";
          }
        }
        })
        .catch(function (error) {
          console.log(error);
        });
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
          <div onClick={() => {
            document.querySelector('#about').scrollIntoView();
          }} className="text-black pr-4">
            About
          </div>
          <NavLink to='/blog' className="text-black pl-4">Blog</NavLink>
        </div>
        <div className="right mmd:hidden">
          <button
            onClick={walletConnect}
            className="hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-4"
          >
            {buttonText.current}
          </button>
          {isAuthenticated && (
            <button
              onClick={logOut}
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
