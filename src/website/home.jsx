import Hero from "./hero";
import "../assets/css/home.css";
import Promo from "./promo";
import Program from "./program";

import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div className="__home">
        <Hero />
        <Promo />
        <Program />
        <Footer />
      </div>
    </>
  );
};

export default Home;
