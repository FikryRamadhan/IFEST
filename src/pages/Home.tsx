import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import About from "../sections/home/About";
import Content from "../sections/home/Content";
import Hero from "../sections/home/Hero";

const Home = () => {
  return (
    <>
      <div>
        <div className="fixed top-0">
          <Navbar />
        </div>
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
