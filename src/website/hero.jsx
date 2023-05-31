import "../assets/css/hero.css";

const Hero = () => {
  return (
    <>
      <div className="w-100">
        <div className="__column __herocontainer">
          <div className=" col-md-7 __herotitlecontainer">
            <div className="__herotitle __fade-top">
              <p>
                bekal <b>freshgrade</b>
              </p>
              <p>
                gaji <b>upgrade</b>
              </p>
            </div>

            <div className="__herobutton __fade-top">
              <button className="btn">
                ambil bekal kamu <span></span>
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
