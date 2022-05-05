function Nav() {
  return (
    <div className="nav relative ml-[30px] z-10">
      <div className="flex flex-row justify-between px-14 pt-5">
        <div className="text-black text-2xl font-bold">CRYPTEA</div>
        <div className="text-black flex flex-row font-medium text-lg">
          <div className="text-black pr-4">About</div>
          <div className="text-black pl-4">Blog</div>
        </div>
        <div className="right">
          <button className="hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-4">Connect Wallet</button>
        </div>
      </div>
    </div>
  )
}

export default Nav;