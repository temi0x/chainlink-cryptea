import Nav from "../../components/Nav";
import Footer from "../../components/Nav/footer";
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="h-screen">
      <Nav />

      <div className="w-full h-1/2 flex flex-col justify-items-center my-8">
        <div className="text-black font-bold text-5xl mx-auto mt-24">
          Nothing Here For Now, Check Back Later
        </div>
      
        <Link to="/" className="mx-auto mt-8">
          <button className="ml-2 hover:bg-[#ff320e] transition-all delay-500 text-sm rounded-lg bg-[#F57059] text-white font-semibold py-4 px-4">
            Go Back Home
          </button>
        </Link>
      </div>

      <Footer />
    </div>

  );
};

export default Blog;
