const signupForm = () => {
  return (
    <div>
      <div className="w-full mt-8">
        <div className="flex flex-col items-center justify-center mx-12">
          <div className="flex flex-row border-b border-[#1B1C31] justify-start w-full">
            <div className="text-[#1B1C31] font-semibold text-xl py-4">
              Signup
            </div>
          </div>

          <div className="username w-full">
            <div className="mt-8">
              <div
                name="inputName"
                className="border border-gray-300 rounded-md"
              >
                <div className="flex">
                  <div>
                    <div className="uppercase px-3 py-3 font-bold text-sm sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31]">
                      <div>Username</div>
                    </div>
                  </div>
                  <input
                    className="rounded-r-lg border p-3 w-11/12 focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31] border-l-0 text-[#1B1C31] placeholder-blue-900"
                    placeholder="vitalik.eth"
                    type="text"
                  />
                </div>
              </div>

              <div
                name="inputDescription"
                className="border border-gray-300 rounded-md mt-8"
              >
                <div className="flex">
                  <div>
                    <div className="uppercase px-3 py-3 font-bold text-sm sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31]">
                      <div>Description:</div>
                    </div>
                  </div>
                  <input
                    className="rounded-r-lg border p-3 w-11/12 focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31] border-l-0 text-[#1B1C31] placeholder-blue-900"
                    placeholder="I created Ethereum"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end w-full mt-8">
            <button className="hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-10">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signupForm;
