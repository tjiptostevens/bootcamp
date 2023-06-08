import Hero from "./hero";
import "../assets/css/home.css";
import Promo from "./promo";
import Program from "./program";
import Footer from "./footer";
import WhyUs from "./whyus";
import Contact from "./contact";
import Faq from "./faq";
import Fact from "./fact";
import Praktisi from "./praktisi";
import WhatIs from "./whatis";
import AmbilBekal from "./ambilbekal";

const Home = () => {
  return (
    <>
      <div className="__home">
        <Hero />
        <Fact />
        <Praktisi />
        <WhatIs />
        <Program />
        <AmbilBekal />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Home;
