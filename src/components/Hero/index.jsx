import logo from "../../img.svg";
import "../../App.css";

function Hero() {
  return (
    <div className="app">
      <div className="flex flex-row justify-center mt-32">
        <div className="left w-1/2 pl-12">
          <div className="text-black font-semibold text-lg">
            Bridging the Web3 gap
          </div>
          <div className="text-black font-bold text-6xl mt-12">
            Give Tips directly from your wallet
          </div>
          <div className="text-black font-normal text-xl mt-6">
            Tipping to your favourite creators now easier than ever. Tip
            anonymously with crypto, or pay with cards (coming soon). All with
            your decentralized wallet.
          </div>
          <div className="flex justify-center">
            <button className="text-sm rounded-lg bg-indigo-800 mx-auto justify-self-center place-self-center object-center text-white font-semibold py-4 px-4">
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="right w-1/2 flex justify-center">
          <img
            src={logo}
            className="App-logo w-auto h-auto"
            alt="Showing 5 cryptocurrencies"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
