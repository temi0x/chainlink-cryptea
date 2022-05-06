import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav relative ml-[30px] 2sm:ml-1 z-10">
      <div className="flex flex-row justify-between px-14 pt-5 2sm:px-7">
        <Link to="/" className="text-black text-2xl font-bold">
          CRYPTEA
        </Link>
        <div className="text-black flex flex-row font-medium text-lg">
          <Link to="about" className="text-black pr-4">
            About
          </Link>
          <div className="text-black pl-4">Blog</div>
        </div>
        <div className="right mmd:hidden">
          <button className="hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-4">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
