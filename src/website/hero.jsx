import "../assets/css/hero.css";
import { rocket } from "../custom/img";

const Hero = () => {
  return (
    <>
      <div id="hero" className="w-100" style={{ position: "relative" }}>
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "300px",
            "--imgright": "none",
            "--imgleft": "-400px",
          }}
        >
          <img
            style={{
              "--imgwidth": "1200px",
              "--imgblur": "5px",
              "--imgrotate": "0deg",
            }}
            src={rocket}
            alt=""
          />
        </div>
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
