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
          background: "white",
          borderBottom: "solid 1px blueviolet",
          maxHeight: "8vh",
          position: "sticky",
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
          }}
        >
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" style={{ height: "50px" }} />
          </a>
          <h1 style={{ margin: "0", padding: "0 15px" }}>SCOLA.Education</h1>
        </div>
        <div className="__navtoggle" style={{ padding: "15px" }}>
          <i className="bi bi-calendar-plus"></i>
        </div>
        <div className="__navcontainer">
          <div className="__navlink">
            <Link to={"/"}>HOME</Link>
          </div>
          <div className="__navlink">
            <Link to={"/program"}>PROGRAM</Link>
          </div>
          <div className="__navlink">
            <Link to={"/event"}>EVENT</Link>
          </div>
          <div className="__navlink">
            <Link to={"/blog"}>BLOG</Link>
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
