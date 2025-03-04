import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import About from "../sections/home/About";
import Content from "../sections/home/Content";
import Hero from "../sections/home/Hero";
import Section from "../sections/home/Section";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="lg:mt-18 mt-10">
          <Hero />
        </div>
        <div className="w-full">
          <About />
          <Section />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
