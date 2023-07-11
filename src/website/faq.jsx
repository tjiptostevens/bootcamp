import "../assets/css/homefaq.css";
import { getFsData } from "../config/firestore";
import { questionMark } from "../custom/img";
const Faq = () => {
  const { data } = getFsData("faqs");

  return (
    <>
      <div
        className="w-100"
        style={{ padding: "50px 0", position: "relative" }}
      >
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "5px",
            "--imgright": "-50px",
            "--imgleft": "none",
            zIndex: "-1",
          }}
        >
          <img
            style={{
              "--imgwidth": "300px",
              "--imgblur": "5px",
              "--imgrotate": "20deg",
            }}
            src={questionMark}
            alt=""
          />
        </div>
        <div
          className="__whatisimg __float"
          style={{
            "--imgtop": "5px",
            "--imgright": "none",
            "--imgleft": "-300px",
            zIndex: "-1",
          }}
        >
          <img
            style={{
              "--imgwidth": "clamp(70vw,50vw,50vw)",
              "--imgblur": "5px",
              "--imgrotate": "-15deg",
            }}
            src={questionMark}
            alt=""
          />
        </div>
        <div className="container">
          <div className="__faqcontainer">
            <div className="__faqtitle">FAQ</div>
            <div className="__faqsubtitle">Yang paling sering ditanyakan</div>

            <div className="col-md-12 __faqcontent">
              {data.map((d, i) => (
                <div key={d.id} className="__faqitem">
                  <div className="__faqitemquestion">
                    <label className="form-check-label" htmlFor={"faq" + i}>
                      {d.question}
                      <i className="bi bi-chevron-down"></i>
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="faq"
                      id={"faq" + i}
                    />

                    <div className="w-100 __faqitemanswer">{d.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
