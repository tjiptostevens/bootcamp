import "../assets/css/homeambilbekal.css";
import { bullsEye, exlamation } from "../custom/img";
const AmbilBekal = () => {
  return (
    <div className="w-100" style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="__whatisimg __float"
        style={{
          "--imgtop": "50px",
          "--imgright": "none",
          "--imgleft": "-350px",
          zIndex: "-1",
        }}
      >
        <img
          style={{
            "--imgwidth": "clamp(70vw,60vw,60vw)",
            "--imgblur": "5px",
            "--imgrotate": "0deg",
          }}
          src={bullsEye}
          alt=""
        />
      </div>
      <div className="container">
        <div className="__ambilbekalcontainer">
          <div className="w-100 __ambilbekaltitle">
            <b>ambil</b>bekal
          </div>
          <div className="w-100 __ambilbekaldate">
            📅 Saturday | June, 10<sup>th</sup> 2023
          </div>
          <div className="w-100 __ambilbekalitem">
            <ul>
              <li>⏰ 19.00-20.00 | DIGITAL MARKETING #7</li>
              <li>⏰ 20.00-21.00 | WEB DEVELOPER #5</li>
              <li>⏰ 21.00-22.00 | REACT DEVELOPER #2</li>
            </ul>
          </div>
          <div
            className="w-100"
            style={{ textAlign: "center", padding: "50px 0" }}
          >
            <div className="__ambilbekalbutton">
              <div
                className="__whatisimg __float"
                style={{
                  "--imgtop": "-20px",
                  "--imgright": "-20px",
                  "--imgleft": "none",
                  background: "royalblue",
                  borderRadius: "50px",
                  padding: "10px",
                }}
              >
                <img
                  style={{
                    "--imgwidth": "40px",
                    "--imgblur": "0px",
                    "--imgrotate": "0deg",
                  }}
                  src={exlamation}
                  alt=""
                />
              </div>
              <p>
                <b>LIMITED</b>
                <br />
                50 STUDENTS/CLASS!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbilBekal;
