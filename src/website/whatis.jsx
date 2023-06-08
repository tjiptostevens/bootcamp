import "../assets/css/homewhatis.css";
import { logo, boxQuestion } from "../custom/img";
const WhatIs = () => {
  return (
    <div className="w-100">
      <div className="container" style={{ position: "relative" }}>
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "5px",
            "--imgright": "50px",
            "--imgleft": "none",
          }}
        >
          <img
            style={{
              "--imgwidth": "300px",
              "--imgblur": "5px",
              "--imgrotate": "-5deg",
            }}
            src={boxQuestion}
            alt=""
          />
        </div>
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "300px",
            "--imgright": "none",
            "--imgleft": "-700px",
          }}
        >
          <img
            style={{
              "--imgwidth": "1200px",
              "--imgblur": "10px",
              "--imgrotate": "20deg",
            }}
            src={boxQuestion}
            alt=""
          />
        </div>
        <div className="__whatiscontainer">
          <div className="w-100">
            <img
              src={logo}
              alt="logo bekalkerja"
              style={{ width: "clamp(40%,45%,70%)" }}
            />
          </div>
          <div className="__whatissubtitle">
            Belajar langsung dari praktisi & pakar dibidang High Tech Industry
            yang sudah berkecimpung selama lebih dari 10 tahun dengan
            pengalamannya diberbagai perusahaan Top Global.
          </div>
        </div>
        <div className="__whatiscontainer">
          <div className="__whatistitle">apa yang kamu dapat ?</div>
          <div className="__whatissubtitle">
            Belajar langsung dari praktisi & pakar dibidang High Tech Industry
            yang sudah berkecimpung selama lebih dari 10 tahun dengan
            pengalamannya diberbagai perusahaan Top Global.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
