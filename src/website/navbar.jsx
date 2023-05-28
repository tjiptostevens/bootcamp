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
          <a href="https://vitejs.dev" target="_blank">
            <span style={{ fontWeight: "100" }}>bekal</span>
            <span style={{ fontWeight: "900" }}>kerja</span>
          </a>
        </div>
        <div className="__navtoggle" style={{ padding: "15px" }}>
          <i className="bi bi-calendar-plus"></i>
        </div>
        <div className="__navcontainer">
          <div className="__navlink">
            <Link to={"/"}>RUMAH</Link>
          </div>
          <div className="__navlink">
            <Link to={"/program"}>BEKAL</Link>
          </div>
          <div className="__navlink">
            <Link to={"/blog"}>BLOG</Link>
          </div>
          <div className="__navlink">
            <Link to={"/event"}>KONTAK</Link>
          </div>
          <div className="__navlink">
            <Link to={"/login"}>
              <i className="bi bi-person"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
