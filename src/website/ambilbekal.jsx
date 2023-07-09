import "../assets/css/homeambilbekal.css";
import { LongDate } from "../custom/dateFormatter";
import { bentobox, exlamation } from "../custom/img";
const AmbilBekal = ({ data }) => {
  return (
    <div className="w-100" style={{ position: "relative", overflow: "hidden" }}>
      {console.log(data)}
      <div
        className="__whatisimg __float"
        style={{
          "--imgtop": "-20px",
          "--imgright": "none",
          "--imgleft": "-350px",
          zIndex: "-1",
        }}
      >
        <img
          style={{
            "--imgwidth": "clamp(60vw,50vw,50vw)",
            "--imgblur": "5px",
            "--imgrotate": "0deg",
          }}
          src={bentobox}
          alt=""
        />
      </div>
      <div className="container">
        <div className="__ambilbekalcontainer">
          <div className="w-100 __ambilbekaltitle">
            <b>ambil</b>bekal
          </div>
          {data.map((d) => (
            <div key={d.id}>
              <div className="w-100 __ambilbekaldate"></div>
              <div className="w-100 __ambilbekalitem">
                <ul>
                  <li>
                    ⏰ {LongDate(d.start)}
                    <span style={{ margin: "0 1rem" }}>|</span>
                    {d.title}
                  </li>
                </ul>
              </div>
            </div>
          ))}

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
