import "../assets/css/lmstopnav.css";
const LmsTopNav = (props) => {
  return (
    <>
      <div
        className="w-100 __row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "6vh",
        }}
      >
        <div>
          <h2 style={{ padding: "0", margin: "0" }}>{props.title}</h2>
        </div>
        <div className="__menucontainerright" style={{}}>
          <div className="__menuright">
            <i className="bi bi-search"></i>
          </div>
          <div className="__menuright">
            <i className="bi bi-bell"></i>
          </div>
          <div className="__menuright">
            {true ? (
              <i className="bi bi-person-square"></i>
            ) : (
              <img src="" alt="" style={{ width: "2rem", height: "2rem" }} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LmsTopNav;
