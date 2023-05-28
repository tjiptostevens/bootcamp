import "../assets/css/hero.css";

const Hero = () => {
  return (
    <>
      <div className="w-100">
        <div className="__column __herocontainer">
          <div className=" col-md-7 __herotitlecontainer">
            <div className="__herotitle">
              <p>BINGUNG NGAPAIN?</p>
              <p>BEKALIN AJA</p>
            </div>

            <div className="__herobutton">
              <button className="btn">
                AMBIL BEKAL KAMU <span></span>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
