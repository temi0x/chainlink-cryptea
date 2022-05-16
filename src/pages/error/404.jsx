import Nav from "../../components/Nav";
import Footer from "../../components/Nav/footer";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="h-screen">
      <Nav />

      <div className="w-full h-1/2 flex flex-col justify-items-center my-auto">
        <div className="text-black font-bold text-5xl mx-auto mt-24">
          We think you're lost
        </div>
        <div className="text-[#F57059] font-semibold text-lg mx-auto mt-12">
          Click this button, and let's get you found
        </div>
        <Link to="/" className="mx-auto mt-8">
          <button className="ml-2 hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-4">
            Take Me Home
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Notfound;
