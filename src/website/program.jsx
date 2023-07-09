import "../assets/css/homeprogram.css";
import { getFsData } from "../config/firestore";
import { handleBlur } from "../custom/animation";
import { shoppingCart } from "../custom/img";
import ProgramComp from "./programcomp";

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
              <ProgramComp data={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
