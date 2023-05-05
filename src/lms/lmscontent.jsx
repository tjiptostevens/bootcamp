import LmsTopNav from "./lmstopnav";
import "../assets/css/lmsoverview.css";

const LmsContent = () => {
  return (
    <>
      <div className="w-100">
        <LmsTopNav title="Overview" />
        <div
          className="w-100"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "90vh",
          }}
        >
          <div className="col-md-8"></div>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div className="__progress">
              <div style={{ paddingBottom: "1rem" }}>Progress</div>
              <div
                className="__progressitem"
                style={{
                  background: "coral",
                }}
              >
                <div style={{ width: "100%" }}>
                  <b>Digital Marketer 101</b>
                  <div
                    className="w-100"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div className="w-100">
                      <div className="progress" style={{ height: "0.5rem" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div>25%</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
              <div
                className="__progressitem"
                style={{
                  background: "skyblue",
                }}
              >
                <div style={{ width: "100%" }}>
                  <b>Digital Marketer 101</b>
                  <div
                    className="w-100"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div className="w-100">
                      <div className="progress" style={{ height: "0.5rem" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div>40%</div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="__suggest">
              <div style={{ paddingBottom: "1rem" }}>Our Suggestion</div>

              <div
                className="__suggestitem"
                style={{
                  aspectRatio: "16/9",
                  background:
                    "url(https://images.pexels.com/photos/920381/pexels-photo-920381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center /cover",
                  borderRadius: "1rem",
                  position: "relative",
                }}
              >
                <div className="__suggestdetail">
                  <div>
                    <b>TITLE</b>
                    <br />
                    <i>Subtitle</i>
                    <br />
                    Rp. 1.000.000,-
                  </div>
                  <div style={{ fontSize: "2rem", display: "block" }}>
                    <i
                      className="bi bi-arrow-right-square"
                      onMouseEnter={(e) => {
                        e.target.classList.remove("bi-arrow-right-square");
                        e.target.classList.add("bi-arrow-right-square-fill");
                      }}
                      onMouseLeave={(e) => {
                        e.target.classList.remove("bi-arrow-right-square-fill");
                        e.target.classList.add("bi-arrow-right-square");
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LmsContent;
