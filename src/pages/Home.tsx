import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import About from "../sections/home/About";
import Content from "../sections/home/Content";
import Hero from "../sections/home/Hero";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Hero />
        </div>
        <div className="w-full">
          <About />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
