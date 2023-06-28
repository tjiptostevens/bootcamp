import "../assets/css/hero.css";
import { rocket } from "../custom/img";

const Hero = () => {
  return (
    <>
      <div id="hero" className="w-100" style={{ position: "relative" }}>
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "200px",
            "--imgright": "none",
            "--imgleft": "-400px",
          }}
        >
          <img
            style={{
              "--imgwidth": "clamp(80vw, 70vw, 70vw)",
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
            <a href="#bekal" style={{ textDecoration: "none", color: "white" }}>
              <div className="__herobutton __fade-top">
                <button className="btn">
                  ambil bekal kamu <span></span>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
