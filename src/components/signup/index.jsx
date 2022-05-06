import info from '../../assets/img/info.svg'

const signupForm = () => {
  return (
    <form>
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
                className="rounded-md"
              >
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

              <div
                name="inputDescription"
                className="rounded-md mt-8"
              >
                <div className="flex">
               
                    <div className="uppercase absolute px-3 py-4 max-w-[122px] font-bold text-sm sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31]">
                      <label htmlFor="desc">Description:</label>
                    </div>
                  
                  <input
                    className="rounded-lg border pl-[122px] p-3 w-full focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31] text-[#1B1C31] placeholder-blue-900"
                    placeholder="I created Ethereum"
                    type="text"
                    name="desc"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[5px] border-[#C2C7D6] mt-8 w-full border-2 border-solid overflow-hidden">
              <div className="flex flex-wrap items-center px-7 justify-between py-4 bg-[#1B1C31] text-white">
                    <span className="uppercase font-semibold mr-3">
                      Cryptea Link
                    </span>
                    <div className="flex items-center">
                      <span 
                      className="mr-2">This is the link which enables other crypto enthusiasts tip you. E.g cryptea.com/vitalik</span>
                      <img 
                        src={info}
                        alt="info"
                      />
                      </div>            
              </div>

            <div className="w-full p-10">

              <label className="font-semibold block mb-2" htmlFor="link">Choose Link Slug</label>
              <div className="flex items-center ssm:flex-wrap">
              <input
                    className="rounded-lg border p-3 w-full focus:outline-none focus:shadow-outline-blue focus:border-[#1B1C31] text-[#1B1C31] placeholder-blue-900 ssm:mr-0 mr-10"
                    placeholder="vitalik"
                    type="text"
                    name="link"
                  />

              <span className="font-semibold min-w-[200px]">Your Username has been taken</span>
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
    </form>
  );
};

export default signupForm;
