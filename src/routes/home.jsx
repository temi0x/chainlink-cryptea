import Hero from "../../components/Hero";
import About from "../../components/about";
import Extras from "../../components/about/extras";

const Home = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Extras />
    </div>
  );
};

export default Home;
