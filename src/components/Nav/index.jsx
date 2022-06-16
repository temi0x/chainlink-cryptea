import { NavLink } from "react-router-dom";
import { ConnectButton } from "web3uikit";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import logo from "../../assets/img/cryptea-logo.svg";

function Nav() {
  const {
    isAuthenticated,
    user,
    authenticate,
    logout
  } = useMoralis();



  useEffect(() => {

    if (isAuthenticated) {
    if (user.get("email") === undefined) {
      window.location.href = "/#/signup";
    } else {
      if (!user.get("email").length) {
        window.location.href = "/#/signup";
      } else {
        window.location.href = "/#/dashboard";
      }
    }      
  }
}, [isAuthenticated, user]);

  const logOut = async (redirect = false) => {
    if (isAuthenticated) {
      logout();
    }
  };

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Welcome to Cryptea" })
        .then(function (user) {
          if (user.get("email") === undefined) {
            window.location.href = "/#/signup";
          } else {
            if (!user.get("email").length) {
              window.location.href = "/#/signup";
            } else {
              window.location.href = "/#/dashboard";
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }else{
      window.location.href = "/#/dashboard";
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
          <div
            onClick={() => {
              document.querySelector("#about").scrollIntoView();
            }}
            className="text-black pr-4"
          >
            About
          </div>
          <NavLink to="/blog" className="text-black pl-4">
            Blog
          </NavLink>
        </div>
        <div className="right mmd:hidden">
          {isAuthenticated ? (
            <div className="flex">
            <button
              onClick={logOut}
              className="hover:bg-[#ff320e] transition-all delay-200 text-sm rounded-lg mr-1 bg-[#F57059] text-white font-semibold py-4 px-4"
            >
              Log Out
            </button>

            <button onClick={login}
              className="hover:bg-[#ff320e] transition-all delay-200 text-sm rounded-lg bg-[#F57059] ml-1 text-white font-semibold py-4 px-4">
              {user.get("ethAddress").substring(0, 5) +"...."+user.get("ethAddress").substring(user.get("ethAddress").length - 5, user.get("ethAddress").length)}
            </button>
            </div>
          ) : (
            <div className="buttonConnect">
              <ConnectButton signingMessage="Welcome to Cryptea" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
