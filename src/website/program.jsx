import "../assets/css/homeprogram.css";
import { getFsData } from "../config/firestore";
import { handleBlur } from "../custom/animation";
import { shoppingCart } from "../custom/img";

const Program = () => {
  const { data } = getFsData("courses", true);
  return (
    <div
      id="bekal"
      className="w-100"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* {console.log(data)} */}
      <div
        className="__whatisimg __float"
        style={{
          "--imgtop": "50px",
          "--imgright": "-300px",
          "--imgleft": "none",
          zIndex: "-1",
        }}
      >
        <img
          style={{
            "--imgwidth": "900px",
            "--imgblur": "5px",
            "--imgrotate": "-7deg",
          }}
          src={shoppingCart}
          alt=""
        />
      </div>
      <div className="container">
        <div className="__programcontainer">
          <div className="__programtitlecontainer">
            <div className="__programtitle">program</div>
            <div className="__programsubtitle">
              Bekal starter pack kamu untuk masuk kedunia 4.0 high tech
              industry.
            </div>
          </div>
          <div className="__programitemcontainer">
            {data.map((d) => (
              <div
                key={d.id}
                className="col-md-4"
                style={{ margin: "0", padding: "1rem" }}
              >
                <div className="__programitem">
                  <div
                    className="__programhero"
                    style={{ "--programimg": `url(${d.img})` }}
                  ></div>
                  <div className="__programitemtitle">{d.title}</div>
                  <div className="__programitemsubtitle">{d.subtitle}</div>
                  <div className="__programitemprice">
                    <div className="__programdummyprice">
                      Rp. {d.dummy_price.toLocaleString()},-{" "}
                      <span className="__redline"></span>
                    </div>
                    <div className="__programrealprice">
                      Rp. {d.price.toLocaleString()},-
                    </div>
                  </div>
                </div>
                <div className="__programbutton">
                  <button className="btn">beli bekal ini</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
