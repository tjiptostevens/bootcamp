import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { logo } from "../custom/img";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/auth";
import NavbarSub from "./navbarsub";

const NavBar = (props) => {
  const [user] = useAuthState(auth);
  const [login, setLogin] = useState(false);
  const [hash, setHash] = useState("");
  useEffect(() => {
    let has = window.location.hash;
    setHash(has);
  }, [window.location.hash]);
  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(!login);
  };
  return (
    <>
      {console.log(user)}
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
          <Link to="/">
            <img src={logo} alt="logo bekalkerja" style={{ width: "250px" }} />
          </Link>
        </div>
        <div className="__navtoggle" style={{ padding: "15px" }}>
          <i className="bi bi-calendar-plus"></i>
        </div>
        <div className="__navcontainer">
          <a href="#hero">
            <div
              className={`__navlink${
                hash === "#hero" || hash === "" ? "active" : ""
              }`}
            >
              rumah
            </div>
          </a>
          <a href="#bekal">
            <div className={`__navlink${hash === "#bekal" ? "active" : ""}`}>
              bekal
            </div>
          </a>
          <a href="#blog">
            <div className={`__navlink${hash === "#blog" ? "active" : ""}`}>
              blog
            </div>
          </a>
          <a href="#kontak">
            <div className={`__navlink${hash === "#kontak" ? "active" : ""}`}>
              kontak
            </div>
          </a>
          {user ? (
            <div style={{ padding: "15px", position: "relative" }}>
              <div
                className={`__navimg${login ? "active" : ""}`}
                onClick={handleLogin}
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName[0]}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <NavbarSub expand={login} />
            </div>
          ) : (
            <>
              <a href="#login" onClick={handleLogin}>
                <div className={`__navlink${login ? "active" : ""}`}>
                  <i className="bi bi-person"></i>
                </div>
              </a>
              <Login expand={login} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
