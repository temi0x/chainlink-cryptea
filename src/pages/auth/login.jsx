import Nav from "../../components/Nav";
const LoginForm = () => {
  return (
      <div>
      <Nav />
    <form>
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col w-[900px] mx-7 items-center justify-center">
          <div className="flex flex-row border-b border-[#1B1C31] justify-start w-full">
            <div className="text-[#1B1C31] font-semibold text-xl py-4">
              Login
            </div>
          </div>

          <div className="username w-full">
            <div className="mt-8">
              <div name="inputName" className="rounded-md">
                <div className="flex">
                  <div className="uppercase absolute max-w-[122px] px-3 py-4 font-bold text-sm sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31]">
                    <label htmlFor="username">Username</label>
                  </div>

                  <input
                    className="rounded-lg border p-3 w-full pl-[122px] focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31] text-[#1B1C31] placeholder-blue-900"
                    placeholder="vitalik.eth"
                    type="text"
                    name="username"
                  />
                </div>
              </div>

              <div name="inputDescription" className="rounded-md mt-8">
                <div className="flex">
                  <div className="uppercase absolute px-3 py-4 max-w-[122px] font-bold text-sm sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31]">
                    <label htmlFor="pass">Password</label>
                  </div>

                  <input
                    className="rounded-lg border pl-[122px] p-3 w-full focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31] text-[#1B1C31] placeholder-blue-900"
                    placeholder="I created Ethereum"
                    type="password"
                    name="pass"
                  />
                </div>
              </div>
            </div>
          </div>
        
          <div className="flex flex-row justify-center w-full mt-8">
            <button className="hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-10">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
