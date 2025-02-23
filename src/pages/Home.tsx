import Card from "../component/Card";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
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
          <Content />
          <Card />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
