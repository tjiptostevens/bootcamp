import viteLogo from "/vite.svg";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <div
        className="w-100 __row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          maxHeight: "8vh",
          position: "sticky",
          top: "0px",
          zIndex: "1",
          backdropFilter: "blur(100px)",
        }}
      >
        <div
          className="__logo"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            lineHeight: "1",
            padding: "0 15px",
            fontSize: "3rem",
          }}
        >
          <Link to="/" target="_blank">
            <img
              src="data:image/png;base64,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"
              alt="logo bekalkerja"
              style={{ width: "250px" }}
            />
          </Link>
        </div>
        <div className="__navtoggle" style={{ padding: "15px" }}>
          <i className="bi bi-calendar-plus"></i>
        </div>
        <div className="__navcontainer">
          <a href="#hero">
            <div className="__navlink">rumah</div>
          </a>
          <a href="#program">
            <div className="__navlink">bekal</div>
          </a>
          <a href="#blog">
            <div className="__navlink">blog</div>
          </a>
          <a href="#kontak">
            <div className="__navlink">kontak</div>
          </a>
          <Link to={"/login"}>
            <div className="__navlink">
              <i className="bi bi-person"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
