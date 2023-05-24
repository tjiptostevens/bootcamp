import Hero from "./hero";
import "../assets/css/home.css";
import Promo from "./promo";
import Program from "./program";
import Footer from "./footer";
import WhyUs from "./whyus";
import Contact from "./contact";

const Home = () => {
  return (
    <>
      <div className="__home">
        <Hero />
        <WhyUs />
        <Promo />
        <Program />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
